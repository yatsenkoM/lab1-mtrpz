const fs = require('fs');
const { convertParagraphs, checkTextForNestedMarkup, checkTextForNoClosedTags } = require('./utils');
const REGEX = require('./constants');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node your_script.js <path_to_markdown_file>');
  process.exit(1);
}

const convertMarkdownToHTML = (markdown) => {
  const resWithoutParagraphs = markdown
    .replace(REGEX.preformatted, '<pre>$1</pre>')
    .replace(REGEX.bold, '<b>$1</b>')
    .replace(REGEX.italic, '<i>$1</i>')
    .replace(REGEX.monospaced, '<tt>$1</tt>');
  return convertParagraphs(resWithoutParagraphs);
};

fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    process.exit(1);
  }

  try {
    checkTextForNestedMarkup(data);
    checkTextForNoClosedTags(data);

    const res = convertMarkdownToHTML(data);
    console.log(res);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
});
