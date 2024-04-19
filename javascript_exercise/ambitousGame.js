function gen(length, width, obj ) {
    let arr = [];
    for (let index = 0; index < length; index++ ){
        arr.push([]);
        for (let ind = 0; ind < width; ind++)
            arr[index].push(" ");
    }

    obj.map(obj => arr[obj.row][obj.column] = obj.value);
    return arr;
}


let length = 3;
let width = 3 ;
let obj = [
    {row : 0, column : 0, value: "x"},
    {row : 0, column : 1, value: "x"},
    {row : 0, column : 2, value: "o"},
    {row : 1, column : 0, value: "o"},
    // {row : 1, column : 1, value: " "},
    {row : 1, column : 2, value: "x"},
    {row : 2, column : 0, value: "x"},
    {row : 2, column : 1, value: "o"},
    {row : 2, column : 2, value: "o"}

];

console.log(gen(length,width,obj));

module.exports = {gen};