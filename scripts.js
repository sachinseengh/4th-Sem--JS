class Person{
    constructor(name){
        this.name= name;
    }
    getName(){
        return this.name;
    }
}
let person = new Person("Jhon");
alert(person.getName());