$defaultGenerator = "antlr-4.8-complete.jar"
$dataFileName = "Data.txt"

$runtimes = @{
    JavaStandard = New-Object PSObject -Property @{
        Name = "JavaStandard";
        Target="Java";
        Extension=".java";
        ExeExtension = ".jar";
    };
    JavaOptimized = New-Object PSObject -Property @{
        Name = "JavaOptimized";
        Target="Java";
        Extension=".java";
        Generator = "antlr-4.7.4-optimized.jar";
        ExeExtension = ".jar";
    };
    CSharpStandard = New-Object PSObject -Property @{
        Name = "CSharpStandard";
        Target = "CSharp";
        Extension = ".cs";
        ExeExtension = ".dll";
    };
    CSharpOptimized = New-Object PSObject -Property @{
        Name = "CSharpOptimized";
        Target = "CSharp_v4_5";
        Extension = ".cs";
        Generator = "antlr-4.6.6-csharp-optimized.jar";
        ExeExtension = ".dll";
    };
    Python3Standard = New-Object PSObject -Property @{
        Name = "Python3Standard";
        Target = "Python3";
        Extension = ".py";
    };
    JavaScriptStandard = New-Object PSObject -Property @{
        Name = "JavaScriptStandard";
        Target = "JavaScript";
        Extension = ".js";
    };
    GoStandard = New-Object PSObject -Property @{
        Name = "GoStandard";
        Target = "Go";
        Extension = ".go";
        ExeExtension = ".exe";
    };
};

$testConfigs = @(
    New-Object PSObject -Property @{ Runtime = "JavaStandard"; Grammar = "LeftRecursion" };
    New-Object PSObject -Property @{ Runtime = "JavaOptimized"; };
    New-Object PSObject -Property @{ Runtime = "CSharpStandard"; };
    New-Object PSObject -Property @{ Runtime = "CSharpOptimized"; };
    New-Object PSObject -Property @{ Runtime = "Python3Standard"; };
    New-Object PSObject -Property @{ Runtime = "JavaScriptStandard"; };
    New-Object PSObject -Property @{ Runtime = "GoStandard"; };
    New-Object PSObject -Property @{ Runtime = "JavaStandard"; Grammar = "NotLeftRecursion" };
    New-Object PSObject -Property @{ Runtime = "JavaOptimized"; };
    New-Object PSObject -Property @{ Runtime = "CSharpStandard"; };
    New-Object PSObject -Property @{ Runtime = "CSharpOptimized"; };
    New-Object PSObject -Property @{ Runtime = "Python3Standard"; };
    New-Object PSObject -Property @{ Runtime = "JavaScriptStandard"; };
    New-Object PSObject -Property @{ Runtime = "GoStandard"; };
)

function ProcessAll()
{
    $currentDate = Get-Date -Format "yyyy-MM-dd-hh-mm-ss"

    $resultDir = "Result-$currentDate"

    if (Test-Path $resultDir)
    {
        Remove-Item $resultDir -Force -Recurse
    }

    New-Item -ItemType Directory -Force -Path $resultDir

    $data = GenerateData

    Set-Content (Join-Path $resultDir $dataFileName) $data -Force

    $prevRuntime = $null
    $prevGrammar = $null

    $resultFileName = Join-Path $resultDir "Result.txt"
    $lineTemplate = "| {0,-40}| {1,10:0} | {2,10:0.00} |"
    Add-Content $resultFileName ($lineTemplate -f "Runtime", "Mean [ns]", "Ratio")
    Add-Content $resultFileName ($lineTemplate -f "---", "---", "---")
    $firstTime = 0

    foreach ($testConfig in $testConfigs)
    {
        $runtime = $runtimes[$testConfig.Runtime]

        if (!$runtime)
        {
            $runtime = $prevRuntime
        }
        else
        {
            $prevRuntime = $runtime
        }

        $grammar = $testConfig.Grammar

        if (!$grammar)
        {
            $grammar = $prevGrammar
        }
        else
        {
            $prevGrammar = $grammar
        }

        ProcessRuntime $runtime $grammar $resultDir
        $time = ImportResult $runtime $grammar $resultDir

        if ($firstTime -eq 0)
        {
            $firstTime = $time
        }

        Add-Content $resultFileName ($lineTemplate -f ($runtime.Name + "_" + $grammar), $time, ($time / $firstTime))
    }
}

function GenerateData()
{
    $termsCount = 128

    $termsCount = 128
    $term = "x_0_0 && x_0_1 == x_0_2 + x_0_3 * x_0_4 ^ x_0_5"
    $result = ""

    for ($i=0; $i -lt $termsCount; $i++) {
        $result += $term
        if ($i -lt $termsCount - 1) {
            $result += " ||`n"
        }
    }

    return $result
}

function ProcessRuntime($runtime, [string] $grammar, [string] $resultDir)
{
    $resultPath = Generate $runtime $grammar $resultDir

    $currentPath = Get-Location
    Set-Location $resultDir
    Build $runtime $grammar $resultPath
    Run $runtime $grammar
    Set-Location $currentPath
}

function Generate($runtime, [string] $grammar, [string] $resultDir)
{
    $runtimeName = $runtime.Name

    Write-Host "Generation of $runtimeName parser..."
    $outputDir = Join-Path $resultDir (Join-Path $grammar $runtimeName)
    $outputSourceDir = $outputDir
    $package = "AntlrBenchmarks"
    if (IsJavaRuntime $runtimeName)
    {
        $outputSourceDir = Join-Path $outputSourceDir "src/main/java/antlrbenchmarks"
        $package = "antlrbenchmarks"
    }
    elseif ($runtimeName -eq "GoStandard")
    {
        $package = "main"
    }

    $generator = $defaultGenerator

    if ($runtime.Generator)
    {
        $generator = $runtime.Generator
    }

    $target = $runtime.Target

    java -jar $generator ($grammar + ".g4") -no-visitor -no-listener -o $outputSourceDir -Dlanguage="$target" -package "$package"

    $dataFullPath = (Join-Path (Join-Path $PSScriptRoot $resultDir) $dataFileName).replace("\", "\\")
    $extension = $runtime.Extension
    $outputMainFile = Join-Path $outputSourceDir ($grammar + $extension)
    $mainFileContent = Get-Content ("Templates/Template" + $extension)
    $mainFileContent = $mainFileContent.replace("__TemplateGrammarName__", $grammar)
    $mainFileContent = $mainFileContent.replace("__RuntimeName__", $runtimeName)
    $mainFileContent = $mainFileContent.replace("default_input_file", $dataFullPath)
    [IO.File]::WriteAllLines((Join-Path $PSScriptRoot $outputMainFile), $mainFileContent)
    $fileOrProjectName = ""
    $projectFileContent = $null

    if (IsCSharpRuntime $runtimeName)
    {
        $projectFileContent = Get-Content "Templates/Template.csproj"
        $projectFileContent = $projectFileContent.replace("<DefineConstants></DefineConstants>", "<DefineConstants>$runtimeName</DefineConstants>")
        $fileOrProjectName = $grammar + ".csproj"
    }
    elseif (IsJavaRuntime $runtimeName)
    {
        $projectFileContent = Get-Content "Templates/pom.xml"
        $groupId = ""
        $artifactId = ""
        $version = ""
        if ($runtimeName -eq "JavaStandard")
        {
            $groupId = "org.antlr"
            $artifactId = "antlr4-runtime"
            $version = "4.8-1"
        }
        else
        {
            $groupId = "com.tunnelvisionlabs"
            $artifactId = "antlr4-runtime"
            $version = "4.7.4"
        }
        $projectFileContent = $projectFileContent.replace("<groupId></groupId>", "<groupId>$groupId</groupId>")
        $projectFileContent = $projectFileContent.replace("<artifactId></artifactId>", "<artifactId>$artifactId</artifactId>")
        $projectFileContent = $projectFileContent.replace("<version></version>", "<version>$version</version>")
        $fileOrProjectName = "pom.xml"
    }
    else
    {
        $fileOrProjectName = ""
    }

    $resultPath = Join-Path (Join-Path $PSScriptRoot $outputDir) $fileOrProjectName

    if ($projectFileContent)
    {
        [IO.File]::WriteAllLines($resultPath, $projectFileContent)
    }

    Write-Host ""

    return $resultPath
}

function Build($runtime, [string] $grammar, [string] $resultPath)
{
    $runtimeName = $runtime.Name
    Write-Host "Building of $runtimeName parser..."
    if (IsCSharpRuntime $runtimeName)
    {
        dotnet build $resultPath -c Release
    }
    elseif (IsJavaRuntime $runtimeName)
    {
        mvn clean install -f $resultPath
    }
    elseif ($runtimeName -eq "GoStandard")
    {
        $currentPath = Get-Location
        Set-Location $resultPath
        go build -o ($grammar + ".exe")
        Set-Location $currentPath
    }

    Write-Host ""
}

function Run($runtime, [string] $grammar)
{
    $runtimeName = $runtime.Name

    Write-Host "Running of $runtimeName parser..."

    $exeOrScriptDirectory = Join-Path $grammar $runtimeName

    if (IsCSharpRuntime $runtimeName)
    {
        $dllPath = Join-Path $exeOrScriptDirectory "bin/Release/netcoreapp3.1/$grammar.dll"
        dotnet $dllPath
    }
    elseif (IsJavaRuntime $runtimeName)
    {
        $jarPath = Join-Path $exeOrScriptDirectory "target/benchmarks.jar"
        java -jar $jarPath -rf csv
    }
    else
    {
        $exeExt = $runtime.ExeExtension

        if (!$exeExt)
        {
            $exeExt = $runtime.Extension
        }

        $scriptOrExePath = Join-Path $exeOrScriptDirectory ($grammar + $exeExt)

        if ($runtimeName -eq "Python3Standard")
        {
            python $scriptOrExePath
        }
        elseif ($runtimeName -eq "JavaScriptStandard")
        {
            node $scriptOrExePath
        }
        elseif ($runtimeName -eq "GoStandard")
        {
            & $scriptOrExePath
        }
        elseif ($runtimeName -eq "PhpStandard")
        {
            php $scriptOrExePath
        }
    }

    Write-Host ""
}

function ImportResult($runtime, [string] $grammar, [string] $resultDir)
{
    $runtimeName = $runtime.Name

    Write-Host "Importing of benchmark result of $runtimeName..."

    $mean = 0
    if (IsCSharpRuntime $runtimeName)
    {
        $csvData = Import-Csv "${resultDir}/BenchmarkDotNet.Artifacts/results/${grammar}Tests-report.csv" -Delimiter ';'
        $meanStr = $csvData[0]."Mean [ns]".replace(",", "")
        $mean = [decimal]$meanStr
    }
    elseif (IsJavaRuntime $runtimeName)
    {
        $csvData = Import-Csv "${resultDir}/jmh-result.csv" -Delimiter ','
        $meanStr = $csvData[0]."Score".replace(",", ".")
        $mean = [decimal]$meanStr
    }
    else
    {
        $content = Get-Content "${resultDir}/${grammar}_${runtimeName}.benchmark"
        $mean = [decimal]$content
    }
    return $mean
}

function IsCSharpRuntime([string] $runtimeName)
{
    return $runtimeName -eq "CSharpStandard" -or $runtimeName -eq "CSharpOptimized"
}

function IsJavaRuntime([string] $runtimeName)
{
    return $runtimeName -eq "JavaStandard" -or $runtimeName -eq "JavaOptimized"
}

ProcessAll