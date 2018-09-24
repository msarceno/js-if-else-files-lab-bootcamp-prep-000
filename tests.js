var index = require("./index.js")

if (index.height === 70) {
    console.log("The height is correct")
}

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}
