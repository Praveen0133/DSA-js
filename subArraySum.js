// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2



function fun(num,k){
    let count=0
        for (let i=0;i<num.length;i++){
            let sum=0
            for (let j=i;j<num.length;j++){
                sum+=num[j];
                if(sum===k){
                    count++
                }
            }
        }
        return count
        
    
    }
    
    num = [1,1,1],k=2
    console.log(fun(num,k));