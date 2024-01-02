function fibsIteration(n) {
  let arr = [0, 1];
  for (let i = 0; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    // if (i === 0 || i === 1) {
    //     arr.push(i);
    // } else {
    //     arr.push(arr[i - 1] + arr[i - 2]);
    // }
  }

  return arr;
}

function fibsRec(n) {
  if (n <= 2) {
    return [0, 1]
  } else {
    let previousArr = fibsRec(n-1);
    previousArr.push(previousArr[previousArr.length-1] + previousArr[previousArr.length-2]);
    return previousArr;
  }
}

export { fibsIteration, fibsRec };


