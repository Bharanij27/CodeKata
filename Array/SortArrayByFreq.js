const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on('line', (data)=>{
  userInput.push(data)
});

inp.on('close', ()=>{
  let arr = {}
  userInput[1].split(' ').forEach(data =>{
      arr[data] = arr[data] == undefined? 1: arr[data]+1
  })
  var sortable = [];
  for (var i in arr) {
    sortable.push([i, arr[i]]);
  }
  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  console.log(sortable.map(data => data[0]).join(' '))
});
