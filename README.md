# Markdown to HTML converter (lab1-mtrpz)

A console application that takes as input a path to a text file with Markdown markup and generates a fragment of HTML markup from it. The application outputs the generated HTML markup either to the standard output (stdout), or if there is an argument with the output file to the output file. If the markup in the input file is incorrect, the application outputs the error to standard error (stderr) and terminates with a non-zero exit code

## Installation of the project

To be able to use the project, you can clone the repository to the desired folder:
```bash
git clone https://github.com/yatsenkoM/lab1-mtrpz.git /path/to/the/folder
```
**or** you can go to the desired folder and write there:
```bash
git clone https://github.com/yatsenkoM/lab1-mtrpz.git
```
**or** you can download the zip archive of this repository and extract it to the desired folder

> [!NOTE]
> For further use of the application, node.js must be installed on your device

## Using the application
_before starting use, you should go to the folder containing the "index.js" file, in this case it is the "lab1-mtrpz" folder_

There are two ways to use it:
- If you need to output the text directly to the console, you can use the following command:
```bash
node index.js /path/to/input.md
```
- If you need to write text to a file, use this command:
```bash
node index.js /path/to/input.md --out /path/to/output.html
```

[Revert commit](https://github.com/yatsenkoM/lab1-mtrpz/commit/623ea2d3b7aca3c8e0ac65328b0cd1e02841ef2a)
