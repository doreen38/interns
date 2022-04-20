const path = require("path");

module.exports = {
    mode: "development",
    entry: "./firebase/firebase.js",
    output: {
        path: path.resolve(__dirname, "scripts"),
        filename: "firebase.js"
    },
    watch: true
}