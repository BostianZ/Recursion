function fibsIteration(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
        arr.push(i);
    } else {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
  }

  return arr;
}

//Need to make this print sequence of numbers in regards to the value of n
//EX: fibsRec(7) => [0,1,1,2,3,5,8,13];
function fibsRec(n) {
    
    if (n < 2) {
        return n;
    }

    return fibsRec(n-1) + fibsRec(n-2);

}

export { fibsIteration, fibsRec };
