function addNumbers(x,y) {
    let answer = x + y;
    return answer

}
console.log(addNumbers(2,3));

function studentGrade(Scores){
// let Scores = [95,75,85,60,45,92]
    let grade = []
    Scores.map(score => {
        if(score > 89 && score < 101){
            grade.push("A")}
        if(score > 79 && score < 90){
            grade.push("B")}
        if(score > 69 && score < 80){
            grade.push("C")}
        if(score > 59 && score < 70){
            grade.push("D")}
        if(score < 60){
            grade.push("F")}
    })
    return grade


}

module.exports = {addNumbers,studentGrade};