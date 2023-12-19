var i = 1;
var n = 5; //counter endpoint
const start = setInterval(print, 1000);
function print(){
    if(i==n)
    clearInterval(start);
    console.log(i)
    i++;
}
