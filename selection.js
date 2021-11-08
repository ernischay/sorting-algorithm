const arr = [4,8,2,5,1,7,3,5,2];

function selectionSort(){
    for(let i=0; i<arr.length; i++){
        let pos = i, min = arr[i];
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<min)
            {
                min = arr[j];
                pos = j;
            }
        }
        let temp = arr[pos];
        arr[pos] = arr[i];
        arr[i] = temp;
    }
}
selectionSort();
console.log(arr);