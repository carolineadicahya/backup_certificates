const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("besttrust_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connected!");
  } catch (err) {
    console.error("Error:", err);
  }
}

connect();
