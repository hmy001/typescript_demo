// 参数装饰器
// target参数对应的是 (普通方法：类的prototype，静态方法：类）, key:对应方法名 , paramIndex: 参数的下标

function testDecorator(target: any, key: string, paramIndex: number) {
    console.log("target:", target, key, paramIndex);
    // descriptor.writable = true;
    // descriptor.value = '666'
    // descriptor.get = () =>{
    //     return 'get 装饰器'
    // }
    // descriptor.set = (name: string) =>{ // set如何访问 this._name
    //     name = "set装饰器：" + name;
    //     return name;
    // }
}

class Test {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    getInfo(@testDecorator  name: string) {
        console.log("name:",name)
    }
    static getStaticFn(@testDecorator name: string) {
        console.log(name)
    }
}
const test = new Test('111');
test.getInfo("hhh");
Test.getStaticFn("kkk")
export {}
