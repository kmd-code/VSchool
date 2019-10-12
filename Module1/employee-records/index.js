let employees = [];
    function Employee(name, jobTitle, salary){
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.status = "Full-Time";
        this.printEmployeeForm = function(){
            console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
        }
    }   
const firstName = "rick"
const lastName = "sanchez"
    console.log(`Hello ${firstName} ${lastName}`)

let x = new Employee("Kaydon", "Sales", "$50k");
let y = new Employee("Jared", "Sales", "$100k");
let z = new Employee("Ivan", "Douche", "$75k");

employees.push(x);
employees.push(y);
employees.push(z);

x.status = "Part-Time";

x.printEmployeeForm();
y.printEmployeeForm();
z.printEmployeeForm();




function reverseStr(str){
    return str.split("").reverse().join("")
}

reverseStr("hello world") // dlrow olleh
