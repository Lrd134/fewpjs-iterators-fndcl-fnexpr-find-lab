
const superbowlWin = array => {
  let answer = array.find(obj =>{ return obj.result === "W"} );
  if (answer)
    return answer.year
}