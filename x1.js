function person(fname, lname, age) {
    this.firstname= fname;
    this.lastname= lname;
    this.age= age;
}
person.prototype.name=function() {
    return this.firstname+" "+this.lastname;
}
function f1(){
    var a= new person("Anurag", "Anand", 20);
    document.getElementById("i1").innerHTML="I am "+a.name()+" "+"and I am "+a.age+" years old";
}
function func() {
    var x= document.getElementById("i2");
    x.innerHTML= "Anurag";
}