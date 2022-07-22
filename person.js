class Person{
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        return `Hello world! meu nome é ${this.name}`;
    }
}

module.exports = {
    Person,
};