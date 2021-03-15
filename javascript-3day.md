# 타입 변환

타입을 바꾸는 행위

부수효과가 발생하지는 않음(타입변환을 하더라도 기존 변수의 타입은 변경되지 않음)

```
//명시적 타입변환
var x = 10;
var str = x.toString();
console.log(typeof str, str);
>>string 10
console.log(typeof x, x); // x 변수의 값이 변경된 것은 아니다.
>>number 10
//암묵적 타입변환
var x = 10;
var str = x + '';
console.log(typeof str, str);
>>string 10
```

## 명시적 타입변환

### 문자열 타입으로 변환

```
String(1);
>>'1'
(1).toString();
>>'1'
var x = 123;
console.log(x + '');
>>'123' // (추천)
```

### 숫자 타입으로 변환

```
Number('0');
>>0
parseInt('0');
>>0
parseFloat('10.53');
>>10.53
'0' * 1;
>>0
```

### 불리언 타입으로 변환

```
Boolean('false');
>>true
!!'false'
>>true
```

## 암묵적 타입변환

### 문자 타입으로 변환

```
0 + ''
>>'0'
-Infinity + ''
>>'-Infinity'
true + ''
>>'true'
null + ''
>>'null'
```

### 숫자 타입으로 변환

```
1 - '1'
>>0
1 * '10'
>>10
1 / 'one'
>>NaN
'1' > 0
>>true
//문자열 타입
+''
>>0
+'0'
>>0
// 불리언 타입
+true
>>1
//null 타입
+null
>>0
// undefined 타입
+undefined
>>NaN
```

### 불리언 타입으로 변환

불리언 타입이 아닌 값을 Truthy 값 또는 Falsy 값으로 구분해 암묵적으로 타입이 변환

false로 평가되는 Falsy 값을 제외하면 모두 Truthy 값

false, undefined, null, 0, -0, NaN, ''(빈문자열)

## 단축 평가

### 논리 연산자를 사용한 단축 평가

```
// 논리합(||) 연산자
'Cat' || 'Dog'
>>'Cat
false || 'Dog'
>>'Dog'
'Cat' || false
>>'Cat'

// 논리곱(&&) 연산자
'Cat' && 'Dog'
>>'Dog'
false && 'Dog'
>>False
'Cat' && false
>>False

// 단축 평가(||)를 이용해 if문 대체하기
var done = false;
var message = '';
if (!done) message = '미완료';
>>'미완료'
message = done || '미완료'; // 단축 평가로 대체
console.log(message);
>>'미완료'
```

# 객체 리터럴

객체를 통해 리터럴한 값을 만들 수 있음

프로퍼티 값은 중첩이 가능 {1:{2:{}}}

```
var person = {
    name: 'kim',
    age: 20
};
console.log(person.name); // 프라퍼티 값의 참조
>>'kim' // 프로퍼티 값으로 평가
console.log(person.age);
>>20 // 프로퍼티 값
person.age = 30; // 프라퍼티 값의 갱신
console.log(person);
>>{ name: 'kim', age: 30 }
var person = {
    name: 'kim'
};
console.log(person.age);
>>undefined
person.age = 30; // 프로퍼티의 동적 추가(생성)
console.log(person.age);
>>30
var person = {
    name: 'kim',
    sayHi() {
        console.log(`Hi! ${this.name}.`);
    }
};
person.sayHi();
>>'Hi! kim.'
```

## 프로퍼티

```
// 프로퍼티 접근
var person = {  
    name: 'kim'
}
person.name // 마침표 표기법 - 일반적인 프로퍼티 접근
>>kim
person[name] // 대괄호 표기법 - 네이밍 규칙이 어긋난 경우
>>kim

// 프로퍼티 축약 표현
var x = 1, y = 2;
var obj = {
  x: x,
  y: y
};
console.log(obj);
>>{x: 1, y: 2} // ES5

let x = 1, y = 2;
const obj = { x, y };
console.log(obj);
>>{x: 1, y: 2} // ES6

// 메서드 축약 표현
var obj = {
  name: 'kim',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};
obj.sayHi();
>>Hi! kim // ES5

const obj = {
  name: 'kim',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};
obj.sayHi();
>>Hi! kim // ES6
```

# 원시값과 객체의 비교

원시값은 변경이 불가능한 값 = 기존에 할당 되었던 값이 변하는 것이 아닌 재할당이기 때문에 변경되지 않음

객체는 변경가능한 값(참조값) = 기존에 할당 할때 값을 할당하는 것이 아닌 주소를 할당받고 그 주소가 객체를 가르킴 따라서 객체값을 변경 가능

null, undefined, true, false 는 하나의 주소를 가짐

## 원시값과 객체값의 전달

원시값은 새로운 값을 지정하고 새로운 변수에 같은 값을 지정하면 할당된 메모리 주소가 다르기 때문에 변수에 새로운 값을 재할당하면 카피한 값은 변경되지 않음

객체값은 새로운 값을 지정하고 새로운 객체에 같은 값을 지정하면 할당된 메모리 주소를 받기 때문에 객체값을 변경하면 새로운 객체에도 값이 변함
