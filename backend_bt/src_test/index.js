// const express = require("express");
// const previewRoute = require("./routes/preview.route");

// const app = express();

// app.use("/preview", previewRoute);

// app.listen(3001, () => {
//   console.log("RUNNING → http://localhost:3001");
// });

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const previewRoute = require("./routes/generate");
app.use("/preview", previewRoute);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}!`)
);
