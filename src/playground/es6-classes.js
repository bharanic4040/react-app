class Person {
    
    constructor(name='Anonymous',age=33){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
    getGreeting(){
        return 'Hi '+this.name;
    }

}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    getDescription(){
        let desc=super.getDescription();
        if(this.hasMajor()){
            desc+=`His major is ${this.major}`;
        }
        return desc;
    }
    hasMajor(){
        return !!this.major;
    }

}
const me=new Student('Bharani Chennu',35,'CSE');

const me2=new Person();

console.log(me2.getDescription());