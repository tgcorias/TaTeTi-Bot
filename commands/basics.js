// sum the numbers upper than 7 in an array
function sum(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 7){
            sum += arr[i];
        }
    }
    return sum;
}