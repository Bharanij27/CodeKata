const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
    userInput.push(data)
});

inp.on('close', ()=>{
  let deal = userInput[1].split(' ');
  let copyDeal=[...deal];
  deal = deal.sort(function(a,b){
    return a-b;
  });
  let index = copyDeal.indexOf(deal[0]);
  console.log('Dealer'+index);
});
	