const REGEX = {
  bold: /(?<=^|\s)\*\*(\S.+?\S|\S)\*\*(?=\s|$)(?![^<pre>]*<\/pre>)/g,
  italic: /(?<=^|\s)_(\S.+?\S|\S)_(?=\s|$)(?![^<pre>]*<\/pre>)/g,
  monospaced: /(?<=^|\s)`(\S.+?\S|\S)`(?=\s|$)(?![^<pre>]*<\/pre>)/g,
  preformatted: /(?<=^|\n)```([\s\S]+?)```(?=\n|$)/g,
};

module.exports = REGEX;
