# 배열

## 배열 메서드

```
// Array.prototype.join - 요소값들을 하나의 문자열로
const srt = ['1', '2', '3']
str.join();
>>'1,2,3'
str.join('');
>>123

// Array.prototype.reverse - 요소값을 뒤집음 뮤테이터
str.reverse();
console.log(str);
>>['3', '2', '1']

// Array.prototype.fill - 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채움 억세서
const arr = [1, 2, 3];
arr.fill(0);
console.log(arr);
>>[0, 0, 0]

// Array.prototype.includes - 요소값이 존재하는지 불린값으로 리턴
arr.includes(2);
>>true
arr.indexOf(2);
>>1 // 요소값의 인덱스 값을 리턴

// Array.prototype.flat - 평탄화(배열안의 배열을 풀어냄)
[1, [2, 3, 4, 5]].flat();
>>[1, 2, 3, 4, 5]
[1, [2, [3, [4]]]].flat(1);
>>[1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(Infinity);
>>[1, 2, 3, 4]
```

## 배열의 고차함수

### Array.prototype.sort

정렬, 뮤테이터, 문자열화 한 뒤 정렬. 유니코드이기 때문에 문자열이라면 그냥 sort()로 정렬이 가능하지만 2자리 수 이상인 숫자라면 정렬이 불가능. 2자리 수 이상의 숫자를 비교하기 위해서는 sort(비교함수)로 사용

```
['2', '1'].sort();
>>['1', '2']
[2, 1].sort();
>>[1, 2]
const points = [40, 100, 1, 5, 2, 25, 10];
>>[1, 10, 100, 2, 25, 40, 5] // 2자리 수 이상은 정렬이 안됨
points.sort((a, b) => a - b);
console.log(points);
>>[1, 2, 5, 10, 25, 40, 100]
points.sort((a, b) => b - a);
console.log(points);
>>[100, 40, 25, 10, 5, 2, 1]
```

### Array.prototype.forEach

for문의 대용품. 활용성은 떨어짐. 대체로 쓸게 있음 최후의 수단으로 생각 리턴값이 undefined

```
Array.prototype.myForEach = function (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }  // 콜백함수가 함수인지 판명 함수가 아니라면 에러출력
  for (let i = 0; i < this.length; i++) {
    fn(this[i]);  // 콜백함수 호출
  }
}; // forEach 메서드 내부 동작을 함수로 풀어씀
```

### Array.prototype.map

새로운 배열을 리턴. 원본과 결과 값의 길이 같을 때 1:1로 매핑. 콜백함수의 리턴값들로 이루어진 새로운 배열을 리턴.

```
Array.prototype.myMap = function (fn) { 
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }  // 콜백함수가 함수인지 판명 함수가 아니라면 에러출력
  const arr = []; // 새로운 배열을 만들어 리턴하기 때문에 만들어줌
  for (let i = 0; i < this.length; i++) {  
    arr.push(fn(this[i], i, this));  // 새로운 배열에 추가
  }
  return arr;  // 새로운 배열을 리턴
}; // map 메서드 내부 동작을 함수로 풀어씀
```

### Array.prototype.filter

걸러냄. 결과값이 원본의 길이보다 작거나 같을 수 있음. 불린값으로 리턴

```
Array.prototype.myFilter = function (fn) { 
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }
  const arr = [];  // 새로운 배열을 리턴
  for (let i = 0; i < this.length; i++) { 
    if (fn(this[i], i, this)) arr.push(this[i]) // 참, 거짓을 판별해서 참인 경우 새로운 배열에 추가
  }
  return arr  // 새로운 배열을 리턴
} // filter 메서드 내부 동작을 함수로 풀어씀
```

### Array.prototype.reduce

알고리즘 문제 풀 때 사용. 결과 값을 하나로 만듦. 인수를 4가지를 받음(앞 인수, 뒤 인수, 인덱스, 배열). 맨 마지막 순회한 값으로 리턴. 무조건 초기값을 줘야함

```
const sum = [1, 2, 3, 4].reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(sum);
>>10 // 0+1>1+2>3+3>6+4>10

// 평균 구하기
const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0); // length-1 = 마지막 순회 값인지 판단
console.log(average);
>>3.5 // 0+1>1+2>3+3>6+4>10+5>15+6>21/6>3.5

// 최대값 구하기
const values = [1, 2, 3, 4, 5];
const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max);
>>5
// Math.max 메서드 사용
cconst max = Math.max(...values);
console.log(max);
>>5

// 요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
const count = fruits.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count);
>>{ banana: 1, apple: 2, orange: 2 } // {banana: 1} => {banana: 1, apple: 1} => {banana: 1, apple: 1, orange: 1}=> {banana: 1, apple: 1, orange: 2} => {banana: 1, apple: 2, orange: 2}

// 중첩 배열 평탄화
const values = [1, [2, 3], 4, [5, 6]];
const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten);
>>[1, 2, 3, 4, 5, 6] // [1] => [1, 2, 3] => [1, 2, 3, 4] => [1, 2, 3, 4, 5, 6]
```

### Array.prototype.some

배열의 요소 중에 하나라도 true면 모두 true

### Array.prototype.every

배열의 요소 중에 하나라도 false면 모두 false

### Array.prototype.find

요소 값을 찾아서 리턴. 

### Array.prototype.findIndex

요소를 순회하면서 반환값이 true인 첫번째 요소의 인덱스를 반환
