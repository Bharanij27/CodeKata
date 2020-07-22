const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = [];
inp.on("line", (data) => {
  userInput.push(data)
});

inp.on('close', ()=>{
    let arrObj = [];
    let num = +userInput[0];
    let arr = userInput[1].split(' ')
    for(let i=0; i<num*2; i+=2){
        let data = arr.slice(i,i+2);
        let obj = {};
        obj['name'] = data[0]
        obj['salary'] = +data[1];
        arrObj.push(obj)
    }
    arrObj.sort(function(a,b){
        return a.salary - b.salary
    })
    let res = arrObj.map(each => each.name)
    console.log(res.join('\n'))
})