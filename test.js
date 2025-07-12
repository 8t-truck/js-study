let a = 'age';

let data = {
    name:"권건우",
    hight:174,
    [a]:24 //변수 a에 할당 된다 이를 Computed property라고 한다.
}
//객체 리터럴
//Object.assign():객체 복제 깊은 복사를 말하는 것 같기도 해~
const newData1 = Object.assign({},data);//{}는 빈객체
const newData2 = Object.assign({ gender:'male' },data);//gender 키 추가
console.log(newData1);
//Object.key() return only key
//Object.value() return only value
//Object.entries() return key/value array 
//Object.fromEntries() make key/value array to Objects

function User(name, age){//첫 글자를 대문자로 하는 것이 관례
    //this = {} 생략
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
    this.showAge = function(){
        console.log(`${this.name}의 나이는 ${this.age}입니다.`);
        console.log(`${this.age}살은 늙은이 입니다`);
    }
    //return this 생략
}
//생성자 함수

let user1 = new User('Mike', 30);
let user2 = new User('Jane',20); //new를 붙이지 않으면 undefine에러 반환
let user3 = new User('건우',40);
user3.sayName();//sayName을 호출 할 때 sayName 함수 안에 this는 user3를 가르킴
//건우가 출력되는거얌
user2.showAge();
