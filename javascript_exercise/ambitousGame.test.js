let {gen} = require("./ambitousGame.js")

test("game mapping  ", () =>{

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
    let answer =[ ["x","x","o"],["o"," ","x"],["x","o","o"] ];
    expect(gen(length,width,obj)).toEqual(answer)
})