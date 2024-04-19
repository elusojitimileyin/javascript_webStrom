let {addNumbers, studentGrade} = require("./add.js")

test("add two numbers", () =>{
    let a = 3;
    let b = 5;
    let answer = addNumbers(a,b);

    expect(answer).toBe(8);
})
test("map the number to  ", () =>{
    let score = [95,75,85,60,45,92];
    let answer = studentGrade(score);
    expect(answer).toEqual([ 'A', 'C', 'B', 'D', 'F', 'A' ])
})