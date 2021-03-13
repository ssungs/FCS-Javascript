// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.

var q1 = 15;

if (10 < q1 < 20) {
  console.log(q1);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

for (var q2 = 0; q2 < 10; q2++) {
  if (q2 % 2 === 0) {
    console.log(q2);
  }
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

stringQ3 = ''
for (var q3 = 0; q3 < 10; q3++) {
  if (q3 % 2 === 0) {
    stringQ3 += q3;
  }
}
console.log(stringQ3);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var q4 = 9; q4 >= 0; q4--) {
  if (q4 % 2 != 0) {
    console.log(q4);
  }
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

var q5 = 0;
while (q5 < 10) {
  if (q5 % 2 === 0) {
    console.log(q5);
  }
  q5++
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var q6 = 9;
while (q6 >= 0) {
  if (q6 % 2 != 0) {
    console.log(q6);
  }
  q6--
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

var sumQ7 = 0;
for (var q7 = 0; q7 < 10; q7++) {
  sumQ7 += q7
}
console.log(sumQ7)

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var sumQ8 = 0;
for (var q8 = 1; q8 < 20; q8++) {
  if (q8 % 2 != 0 && q8 % 3 != 0) {
    sumQ8 += q8;
  }
}
console.log(sumQ8);

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var sumQ9 = 0;
for (var q9 = 1; q9 < 20; q9++) {
  if (q9 % 2 === 0 || q9 % 3 === 0) {
    sumQ9 += q9;
  }
}
console.log(sumQ9);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var diceOne = 1; diceOne <= 6; diceOne++) {
  for (var diceTwo = 1; diceTwo <= 6; diceTwo++) {
    if (diceOne + diceTwo === 6) {
      console.log(`[${diceOne}, ${diceTwo}]`);
    }
  }
}

// 11. 삼각형 출력하기 - pattern 1
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 
// 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

starQ11 = ''
for (var lineQ11 = 1; lineQ11 <= 5; lineQ11++) {
  for (var printQ11 = 1; printQ11 <= lineQ11; printQ11++) { 
    starQ11 += '*';
  }
  starQ11 += '\n';
}
console.log(starQ11);

// 12. 삼각형 출력하기 - pattern 2

starQ12 = ''
for (var lineQ12 = 5; lineQ12 >= 1; lineQ12--) {
  for (var spaceQ12 = 1; spaceQ12 < 6 - lineQ12; spaceQ12++) { 
    starQ12 += ' '
  }
  for (var printQ12 = 1; printQ12 <= lineQ12; printQ12++) { 
    starQ12 += '*';
  }
  starQ12 += '\n';
}
console.log(starQ12);

// 13. 삼각형 출력하기 - pattern 3

starQ13 = ''
for (var lineQ13 = 5; lineQ13 >= 1; lineQ13--) {
  for (var printQ13 = 1; printQ13 <= lineQ13; printQ13++) { 
    starQ13 += '*';
  }
  starQ13 += '\n';
}
console.log(starQ13);

// 14. 삼각형 출력하기 - pattern 4

starQ14 = ''
for (var lineQ14 = 1; lineQ14 <= 5; lineQ14++) {
  for (var spaceQ14 = 1; spaceQ14 < 6 - lineQ14; spaceQ14++) { 
    starQ14 += ' '
  }
  for (var printQ14 = 1; printQ14 <= lineQ14; printQ14++) { 
    starQ14 += '*';
  }
  starQ14 += '\n';
}
console.log(starQ14);

// 15. 정삼각형 출력하기

starQ15 = ''
for (var lineQ15 = 1; lineQ15 <= 5; lineQ15++) {
  for (var spaceLeftQ15 = 1; spaceLeftQ15 < 6 - lineQ15; spaceLeftQ15++) { 
    starQ15 += ' '
  }
  for (var printLeftQ15 = 1; printLeftQ15 <= lineQ15; printLeftQ15++) { 
    starQ15 += '*';
  }
  for (var printRightQ15 = 2; printRightQ15 <= lineQ15; printRightQ15++) { 
    starQ15 += '*';
  }
  for (var spaceRightQ15 = 1; spaceRightQ15 < 6 - lineQ15; spaceRightQ15++) { 
    starQ15 += ' '
  }
  starQ15 += '\n';
}
console.log(starQ15);

// 16. 역정삼각형 출력하기

starQ16 = ''
for (var lineQ16 = 5; lineQ16 >= 1; lineQ16--) {
  for (var spaceLeftQ16 = 1; spaceLeftQ16 < 6 - lineQ16; spaceLeftQ16++) { 
    starQ16 += ' '
  }
  for (var printLeftQ16 = 1; printLeftQ16 <= lineQ16; printLeftQ16++) { 
    starQ16 += '*';
  }
  for (var printRightQ16 = 2; printRightQ16 <= lineQ16; printRightQ16++) { 
    starQ16 += '*';
  }
  for (var spaceRightQ16 = 1; spaceRightQ16 < 6 - lineQ16; spaceRightQ16++) { 
    starQ16 += ' '
  }
  starQ16 += '\n';
}
console.log(starQ16);
