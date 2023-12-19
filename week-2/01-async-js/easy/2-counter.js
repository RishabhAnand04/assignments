function wait(){
    return new Promise(function(resolve){
        setTimeout(resolve,1000)
    })
}
async function counter(n){
    for(let i=1;i<=n;i++){
        let second = await wait();
        console.log(i);
    }
}
counter(5); //counter for 5 seconds
