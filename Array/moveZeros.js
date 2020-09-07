/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    let  i = 0;
    while(i < nums.length){
        if(nums[i] !== 0) i++;
        if(nums[i] === 0 && count !== nums.length - i){
            nums.splice(i, 1);
            nums.push(0);
            count++;
            if(nums[i] !== 0) i++;
        }  
        else break;      
    }
  };
  debugger;
  moveZeroes([0,1,0,3,12]);