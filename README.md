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

## Example:
Input text:
````
**Жовта сова** _на_ `старому дереві` відправилася на подорож. Під час **своєї_мандрівки** вона зустріла _маленького_ їжачка, який `блукав у пошуках` свого дому.

Жовта сова **вирішила допомогти** їжачкові. Вона підказала йому _найкращий_ шлях та _привела_ його до _затишної нори_ під великим дубом.
```
Після того, як їжачок знайшов **свій** дім, вони разом провели **чудовий** день, ділячись _історіями_ та пригодами.
```
Коли настав час прощання, **жовта сова** й **маленький їжачок** побажали один одному _безпечної подорожі_ та _зустрічі_ в майбутньому.
````

Output text:
````
<p><b>Жовта сова</b> <i>на</i> <tt>старому дереві</tt> відправилася на подорож. Під час <b>своєї_мандрівки</b> вона зустріла <i>маленького</i> їжачка, який <tt>блукав у пошуках</tt> свого дому.</p>
<p>Жовта сова <b>вирішила допомогти</b> їжачкові. Вона підказала йому <i>найкращий</i> шлях та <i>привела</i> його до <i>затишної нори</i> під великим дубом.
<pre>
Після того, як їжачок знайшов **свій** дім, вони разом провели **чудовий** день, ділячись _історіями_ та пригодами.
</pre>
Коли настав час прощання, <b>жовта сова</b> й <b>маленький їжачок</b> побажали один одному <i>безпечної подорожі</i> та <i>зустрічі</i> в майбутньому.</p>
````

[Revert commit](https://github.com/yatsenkoM/lab1-mtrpz/commit/623ea2d3b7aca3c8e0ac65328b0cd1e02841ef2a)
