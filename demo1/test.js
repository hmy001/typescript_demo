// 每个对象都有prototype属性 ??
// 每个【实例对象】和【原型对象】都有__proto__
function Father(name, age) {
    this.name = name;
    this.age = age;
}
Father.prototype.makeMoney = function() {
    console.log(this.name + "赚钱！")
}
let f = new Father('夏天', 45);
f.makeMoney()
function Son(name, age, score = 100) {
    Father.call(this, name, age);
    this.score = score;
};
Son.prototype = new Father();
Son.prototype.exam = () => {
    console.log(this.name+'考试！！')
}
let s = new Son('夏明', 18);
let ss = new Son('夏明1', 28);
s.makeMoney();
ss.makeMoney();
console.log(s, f,s.__proto__.__proto__, f.__proto__,f.__proto__.__proto__)

class person{
    name = 'hmy';
    getName() {
        return this.name
    }
}
console.log("person.prototype:",person.prototype)