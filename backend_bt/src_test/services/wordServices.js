const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

module.exports = function fillTemplate(templatePath, data) {
  if (!data || Object.keys(data).length === 0) {
    throw new Error("DATA KOSONG - TEMPLATE TIDAK BISA DIRENDER");
  }

  const content = fs.readFileSync(templatePath, "binary");
  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: {
      start: "{",
      end: "}",
    },
  });

  try {
    doc.render(data);
  } catch (error) {
    console.log("DOCXTEMPLATER ERROR");
    console.log(JSON.stringify(error, null, 2));

    if (error.properties && error.properties.errors) {
      error.properties.errors.forEach((e, i) => {
        console.log(`Error ${i + 1}:`, e);
      });
    }

    throw error;
  }

  return doc.getZip().generate({ type: "nodebuffer" });
};
