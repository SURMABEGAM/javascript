for (i = 0; i < 14; i++) {
  //console.log(i);
  if (i >= 10) {
    // console.log("The loop has completed.");
  }
}

let n = 20;
while (n < 51) {
  if (n > 30) {
    break;
  }
  //console.log(n);
  n++;
}

let m = 10;
while (m > 0) {
  //
  if (m <= 1) {
    break;
  }
  // console.log(m);
  m--;
}

for (let i = 2; i < 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

let x = 0;
while (x < 10) {
  x++;
  if (x % 6 === 0) {
    continue;
  }
  console.log(x);
}
