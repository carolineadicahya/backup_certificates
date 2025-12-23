const express = require("express");
const router = express.Router();
const path = require("path");

const fillTemplate = require("../services/wordServices");
const convertToPdf = require("../services/pdfServices");

router.post("/", (req, res) => {
  try {
    const templatePath = path.join(
      __dirname,
      "../templates/Sertifikat Karantina.docx"
    );

    const buffer = fillTemplate(templatePath, req.body);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="hasil_generate.docx"'
    );

    res.send(buffer);
  } catch (err) {
    res.status(500).json({
      message: "Gagal generate dokumen",
      error: err.message,
    });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     const template = path.join(__dirname, "../templates/hc.docx");

//     const docxBuffer = fillTemplate(template, req.body);
//     const pdfBuffer = await convertToPdf(docxBuffer);

//     res.setHeader("Content-Type", "application/pdf");
//     res.send(pdfBuffer);
//   } catch (err) {
//     console.error("===== ERROR ASLI =====");
//     console.error(err);
//     console.error("=====================");
//     res.status(500).send("Gagal generate PDF");
//   }
// });

module.exports = router;
