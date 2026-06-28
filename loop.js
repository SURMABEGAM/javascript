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
  //console.log(i);
}

let x = 0;
while (x < 10) {
  x++;
  if (x % 6 === 0) {
    continue;
  }
  //console.log(x);
}

const name = ["suma", "najma", "veto", "liza", "aklima", "surma"];
// console.log(name[5]);

for (let i = 0; i < name.length; i++) {
  //console.log(i);
  // console.log(name[i]);
}

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let s = 0; s < number.length; s++) {
  // console.log(number[s]);
}

let k = 0;
while (k < name.length) {
  // console.log(name[k]);
  k++;
}

let h = 0;
while (h < number.length) {
  //console.log(number[h]);
  h++;
}
