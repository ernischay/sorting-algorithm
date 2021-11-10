const arr = [4,8,2,5,1,7,3,5,2];

function partition(arr, low, high){
    let pivot = arr[high];
    let i = low-1;
    for(let j=low; j<=high-1; j++){
        if(arr[j] < pivot)
        {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return i+1;
}

function quickSort(arr, low, high){
    if(low<high){
        let p = partition(arr, low, high);
        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}
quickSort(arr, 0, arr.length-1);
console.log(arr);