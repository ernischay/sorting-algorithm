const arr = [4,8,2,5,1,7,3,5,2];

function merge(arr, i, m, j){
    let l1 = (m-i+1), l2 = (j-m);
    let leftArray = new Array(l1);
    let rightArray = new Array(l2);

    for(let l=0; l<l1; l++)
        leftArray[l] = arr[i+l];
    for(let r=0; r<l2; r++)
        rightArray[r] = arr[m+1+r];

    let q = 0, r = 0, k = i;
    while(q<l1 && r<l2){
        if(leftArray[q] <= rightArray[r])
            arr[k++] = leftArray[q++];
        else
            arr[k++] = rightArray[r++];
    }
    while(q<l1)
        arr[k++] = leftArray[q++];
    while(r<l2)
        arr[k++] = rightArray[r++];
}

function mergeSort(arr, i, j){
    if(i>=j)
        return;
    let m = i + parseInt((j-i)/2);
    mergeSort(arr, i, m);
    mergeSort(arr, m+1, j);
    merge(arr, i, m, j);
}
mergeSort(arr, 0, arr.length-1);
console.log(arr);

