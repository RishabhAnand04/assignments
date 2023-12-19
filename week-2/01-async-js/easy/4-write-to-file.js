const fs = require('fs');

fs.writeFile('sample.txt', 'add text', (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("sample.txt", { encoding: 'utf-8' }, function (err,data) {
        if(err)
            console.log(err)
        else
            console.log(data);
    });
  }
});
