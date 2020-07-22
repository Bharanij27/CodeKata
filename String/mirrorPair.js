const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
    function isMirror(s1, s2){
        s2 = s2.reverse();
        for(let i=0;i<s1.length; i++)
        {
            if(s1[i]!=s2[i]) return 0;
        }
        return 1;
    }
    
    let founded = false;
    let num = +userInput[0];
    for(let i=1; i<num+1; i++){
        let arrayS1 = userInput[i].split(' ');
        for(let j=i+1; j<num+1; j++){
            let arrayS2 = userInput[j].split(' ');
            if(arrayS1.includes(arrayS2[0]) && isMirror(arrayS1,arrayS2)){
                founded = true;
                console.log("YES");
                break;
            }
        }
    }
    if(!founded)console.log("NO")
});