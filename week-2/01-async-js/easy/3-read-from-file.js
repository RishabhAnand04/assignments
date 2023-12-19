const fs = require("fs");
function file() {
    fs.readFile("sample.txt", { encoding: 'utf-8' }, function (err,data) {
        if(err)
            console.log(err)
        else
            console.log(data);
    });
}
async function temp() {
    var n = 10000000000000;
    file();
    console.log('start');
    for (let i = 0; i < n; i++) {
    }
    console.log('end');
}
temp();
