const express = require("express");
const { resolve, dirname } = require("path");

const app = express();

app.get("/", (request, response) => {
    response.sendFile(resolve(__dirname, "../client/index.html"));
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});
