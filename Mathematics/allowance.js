const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    let num = +userInput[0];
    let info = userInput[1].split(' ');
    let months = ['JANUARY' ,'FEBRUARY', 'MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
    let cnt = [];
    for(let i=0; i<num*3; i+=3){
        let index = months.indexOf(info[i+1].toUpperCase())
        if(+info[i+2]<=1987){
            if(+info[i+2]==1987 && index>6)break;
            else if((index<=6 && index%2==0)||(index>6 && index%2!=0))
            cnt.push((i/3)+1)
        }
    }
    if(cnt.length)console.log(cnt.join(' '))
    else console.log(-1)
});