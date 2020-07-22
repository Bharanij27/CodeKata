const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
    userInput.push(data)
});

inp.on('close', ()=>{
    function removeSpace(arr){
        return arr.filter(elemnet => elemnet!= '' && elemnet!=' ');
    }
    let size = +userInput[0];
    let year = userInput[1].split(' ');
    year = removeSpace(year)
    let party = userInput[2].split(' ');
    party = removeSpace(party)
    let election = [];
    for(let i=0; i<size; i++){
        let obj = {}
        obj['year'] = year[i];
        obj['party'] = party[i]
        election.push(obj)
    }
    election.sort(function(a,b){
        return +a.year - +b.year
    });
    let first = election[0]['party']
    for(let i=0; i<size; i++){
        if(election[i]['party'] != first){
            console.log(election[i]['year']);
            first = election[i]['party']
        }
    }
});
