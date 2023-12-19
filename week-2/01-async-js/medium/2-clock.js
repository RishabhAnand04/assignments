// const start = setInterval(print, 1000);
// function print(){
//     const date = new Date();
//     console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
// }

function wait(){
    return new Promise(function(resolve){
        setTimeout(resolve,1000)
    })
}
async function counter(n){
    for(let i=1;i<=n;){
        let second = await wait();
        const date = new Date();
        console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
    }
}
counter(5); 
