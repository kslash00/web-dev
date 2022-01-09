function bubbleSort(arr) { //задача 1
    let swap;
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

function r() { //задача 2
    //  Дана последовательность целых чисел а1, а2, …, аn. 
    //Выяснить, сколько чисел и какие входят в последовательность 
    //более чем по одному разу. Реализовать функцию, которая должна 
    //принимать в качестве аргумента массив и возвращать объект, 
    //свойства которого будут соответствовать числам, которые 
    //встретились в массиве более одного раза, а значения -- количеству
    //вхождений данного числа в последовательность.
    
}

function max_min_str(arr) { //задача 3
    let max_min, min_str;
    for (let i = 0; i < arr.length; i++) {
        if (i == 1)
            max_min = min_str;

        min_str = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min_str)
                min_str = arr[i][j];
        }

        if (max_min < min_str)
            max_min = min_str;
    }
    return max_min;
}

function sdvig(arr, k) { //задача 5
    let copy, copy2, i = 0;
    if (k > arr.length) k = k % arr.length;
    let n = k;
    while (i < arr.length) {

        if ((n - k) >= 0) {

            if (copy == undefined) {
                copy = arr[n - k];
                arr[n - k] = arr[n];
                n = n - k;
            }
            else {
                copy2 = arr[n - k];
                arr[n - k] = copy;
                copy = copy2;
                n = n - k;
            }
        }
        else {
            n = arr.length + (n - k);
            copy2 = arr[n];
            arr[n] = copy;
            copy = copy2;
        }
        i++;
    }
    return arr;
}

let k = 3;
let arr = [1, 3, 4, 2, 3];
alert(sdvig(arr, k));
