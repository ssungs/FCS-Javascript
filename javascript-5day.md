# ES6 함수의 추가 기능

## 함수의 구분

함수는 호출 전에 일반함수, 생성자 합수, 메서드인지 모르기 때문에 3가지 동작을 할 수 있도록 준비중

화살표 함수는 무조건 일반함수로써 호출

함수 이름은 변수가 아님 만약 함수 이름이 변수라면 함수를 재할당하는 것이 가능해짐

```
const foo = function () {
  return 1;
};

foo(); // 일반 함수로써 호출
>> 1
new foo(); // 생성자 함수로써 호출
>>foo {}
const o = { foo }; // {}안의 foo는 원래 foo : foo
o.foo(); // 메서드로써 호출
>>1 
```

# 배열

배열 리터럴을 변수에 지정

배열 리터럴 안에 하나하나는 요소라고 부름

값으로 인정되는 모든 것이 요소로 올 수 있음

요소들의 type이 일치할 필요가 없음 하지만 type이 일치하지 않으면 배열이 무의미

배열은 반복하기 위해서 만듦

```
//기본구조
변수 = [1,2,3];<- 배열 리터럴(안에 1,2,3은 요소)
```

## 자바스크립트의 배열은 배열이 아님

자료 구조에서의 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 구조(type값이 같음) - 밀집 배열

자바스크립트의 배열은 일반적인 배열과 비슷하게 동작하는 객체

자바스크립트 배열의 요소는 프로퍼티 값

자바스크립트 배열은 해시 테이블로 구현된 객체로 일반적인 배열보다 성능적인 면에서 느리지만 특정 요소 검색, 삽입, 삭제는 빠름

## 희소 배열

배열의 요소값을 비워두고도 배열을 만들 수 있지만 쓰면 안됨

요소들과 비어있는 요소는 type이 다르기 때문에 문제가 됨

## 배열 생성

```
// 배열 리터럴
const arr = [1, 2, 3]; // 0개 이상의 요소를 쉼표로 구분하고 []로 묶음

// Array 생성자 함수
const arr = new Array(1, 2, 3);

// Array.of
Array.of(1, 2, 3);

// Array.from
Array.from({ length: 2, 0: 'a', 1: 'b' });
>>['a', 'b'] // 유사 배열 객체를 변환해 배열 생성
Array.from('Hello');
>>['H', 'e', 'l', 'l', 'o'] // 이터러블한 문자열로 배열 생성
```

## 배열 요소의 참조

배열은 인덱스를 가지고 있기 때문에 인덱스로 참조 가능

결국 인덱스는 프로퍼티의 키값이 됨

만약 없는 값을 참조할 경우 undefined를 반환

## 배열 요소의 추가와 갱신

배열 요소의 추가와 갱신은 객체의 동적 추가와 갱신과 동일한 구조로 동작

```
// 배열 요소의 추가
const arr = [0];
arr[1] = 1;
console.log(arr);
>>[0, 1]

// 요소값의 갱신
arr[1] = 10;
console.log(arr);
>>[0, 10]
```

## 배열 요소의 삭제

배열의 요소를 삭제할때는 delete 연산자를 사용

프로퍼티를 삭제하면 삭제된 요소자리가 빈 희소 배열이 되므로 사용하지 않는 것이 좋음

## 배열 메서드

정적 메서드 - 인스턴스 없이 호출

프로토타입 메서드 - 반드시 인스턴스로 호출

스코프 체인과 프로토타입 체인 2개가 서로 협력하여 찾음

```
// Array.isArray(); - ()안이 배열인지 참 거짓으로 반환, 정적 메소드
Array.isArray([]);
>>true
Array.isArray({});
>>false

// Array.prototype.indexOf - 프로토타입 메서드
const arr = [1, 2, 3];
arr.indexOf(2);
>>1
arr.indexOf(4);
>>-1 // 요소가 없는 경우 -1을 반환

// Array.prototype.push - 원본 배열을 바꾸는 메서드 - 새롭게 추가된 요소를 반환 - 뮤테이터
const arr = [1, 2, 3];
arr.push(4); // push는 가변인자 함수
console.log(arr);
>>[1, 2, 3, 4] // 기존 배열의 가장 마지막에 밀어넣음

// Array.prototype.pop - 원본 배열에서 마지막 요소를 제거하고 반환 - 뮤테이터
const arr = [1, 2];
let result = arr.pop();
console.log(result);
>>2

// Array.prototype.unshift - 원본 배열의 선두에 요소로 추가 - 뮤테이터
const arr = [1, 2];
let result = arr.unshift(3, 4);
console.log(result);
>>4

// Array.prototype.shift - 원본 배열에서 첫 번째 요소를 제거하고 반환 - 뮤테이터
const arr = [1, 2];
let result = arr.shift();
console.log(result);
>>1

// Array.prototype.concat - push와 다르게 []배열을 풀어서 들어감 2개의 배열을 하나로 합칠 경우 사용 억세서
const arr1 = [1, 2];
const arr2 = [3, 4];
let result = arr1.concat(arr2); // 새로운 배열을 만들어서 리턴
console.log(result);
>>[1, 2, 3, 4]
console.log([...arr1, ...arr2]);
>>[1, 2, 3, 4] // concat과 동일하게 동작 - 표현식(문법적으로 좋음 - 추천)

// Array.prototype.splice - 원본 배열의 중간에 요소를 추가하거나 제거(변경) - 뮤테이터
const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30); // 시작,종료,변환인수1,변환인수2
console.log(result);
>>[2, 3]
console.log(arr);
>>[1, 20, 30, 4]

// Array.prototype.slice - 인수로 전달된 범위의 요소들을 복사하고 배열로 반환 - 억세서
const arr = [1, 2, 3];
arr.slice(0, 1); // 0번 인덱스부터 1번 인덱스 미만을 자름
>>[1]
arr.slice(-2);
>>[2, 3]
const copy = arr.slice();
console.log(copy);
>>[1, 2, 3] // 카피(복사) - 배열을 복사해서 새로 만듦 - slice
const copy = [...arr];
>>[1, 2, 3] // 카피(복사) - 표현식 
```

### 얕은 복사와 깊은 복사

배열을 복사할 때, 배열을 새롭게 만들되 그 안의 요소까지는 새롭게 만들지 않고 요소만은 복사하는데 이를 얕은 복사라 함

깊은 복사는 빌트인 함수만으로 구현이 불가능하기 때문에 재귀를 사용해야 함 쉬운 방법은 라이브러리를 사용하는 방법