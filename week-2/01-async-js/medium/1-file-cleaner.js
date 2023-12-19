const fs = require("fs");
function read() {
    fs.readFile("sample.txt", { encoding: 'utf-8' }, function (err,data) {
        if(err)
            console.log(err)
        else{
            clean(data);
        }
    });
}
function clean(data){
    data=data.replace(/\s+/g, ' ').trim();
    write(data)
}
function write(cleanData){
    fs.writeFile('sample.txt', cleanData, (err) => {
        if (err) console.log(err);
    })
}
read();