const libre = require("libreoffice-convert");

module.exports = function convertToPdf(docxBuffer) {
  return new Promise((resolve, reject) => {
    libre.convert(docxBuffer, ".pdf", undefined, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
