const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let userInput = []

inp.on("line", (data) => {
  userInput.push(data)
});

inp.on("close", (data) => {
    function findDays(day){
        let cnt = 0;
        for(let i=1; i<=day; i++){
            if(day % i ==0) cnt++;
            if(cnt > 2) return 0;
        }
        return 1;
    }
    
  let arr = userInput[0].split(' ');
  let months = {'January': 31, 'February': 28, 'March' : 31, 'April': 30, 'May': 31, 'June': 30,
                'July': 31, 'August': 31, 'September':30, 'October': 31, 'November': 30, 'December': 31}
  let days;
  if(arr[0] == 'February'){
      days = (arr[1] % 2 ==0)? 29: 28;
  }
  else days = months[arr[0]];
  let workingDays = 0;
  for(let i=1; i<days+1; i++){
      workingDays += findDays(i)
  }
  console.log(workingDays-1)
});