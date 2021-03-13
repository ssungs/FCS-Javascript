// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라.

var x = 15;

if (10 < x < 20) {
  console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

string = ''
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    string += i;
  }
}
console.log(string);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var i = 9; i >= 0; i--) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

var i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var i = 9;
while (i >= 0) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i--
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i
}
console.log(sum)

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var sum = 0;
for (var i = 1; i < 20; i++) {
  if (i % 2 != 0 && i % 3 != 0) {
    sum += i;
  }
}
console.log(sum);

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var sum = 0;
for (var i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum += i;
  }
}
console.log(sum);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var one = 1; one <= 6; one++) {
  for (var two = 1; two <= 6; two++) {
    if (one + two == 6) {
      console.log(`[${one}, ${two}]`);
    }
  }
}

// 11. 삼각형 출력하기 - pattern 1
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 
// 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

star = ''
for (var line = 1; line <= 5; line++) {
  for (var print = 1; print <= line; print++) { 
    star += '*';
  }
  star += '\n';
}
console.log(star);
