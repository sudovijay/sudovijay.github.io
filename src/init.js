// require js app
require("./App.jsx");

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
