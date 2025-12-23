const QRCode = require("qrcode");

module.exports = async function generateQr(data) {
  return await QRCode.toDataURL(JSON.stringify(data));
};
