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

function fibsRec(n) {
    
    if (n < 2) {
        return n;
    }

    return fibsRec(n-1) + fibsRec(n-2);

}

export { fibsIteration, fibsRec };
