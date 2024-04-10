const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/data", (req, res) => {
    res.json({ message: "Data fetched successfully!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
