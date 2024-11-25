beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "tf-8");
    document.open();
    document.write(fileContents);
    document.close();
});