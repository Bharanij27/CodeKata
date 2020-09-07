var intersect = function(nums1, nums2) {
    let res = [];
    nums1.forEach(data => { 
        if(nums2.includes(data)){
            if(!res.includes(data)) res.push(data);
            else if(nums2.filter(ele => ele == data).length !== res.filter(ele => ele == data).length){
                res.push(data)
            }
        }
    });
    return res;
};