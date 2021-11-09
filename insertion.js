const arr = [4,8,2,5,1,7,3,5,2];

function insertionSort(){
    for(let i=1; i<arr.length; i++){
        let j=i;
        while(j>0){
            if(arr[j-1]>arr[j])
            {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
            j--;
        }
    }
}
insertionSort();
console.log(arr);