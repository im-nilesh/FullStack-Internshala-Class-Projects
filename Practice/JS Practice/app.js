function Neel(name, age, prof){
    this.name = name;
    this.age = age;
    this.profession = prof;
}

Neel.prototype.greet = function(){
    console.log(`Hello ${this.name}`);
    console.log(this);
    
}

let n1 = new Neel("Nilesh", 21, "Full Stack Dev")
let n2 = new Neel("Laxmi", 19, "Student")
n1.greet()
n2.greet()
