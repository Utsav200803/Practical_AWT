function main() {
    let name = "Utsav Gundaraniya"; 
    let age = 20          
    let height = 2.00;     
    let isStudent = true;  

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Height:", height);
    console.log("Is Student:", isStudent);

    let num1 = 10
    let num2 = 20
    let result = add(num1, num2);
    console.log("Sum of the two numbers:", result);
}
function add(num1, num2) {
    return num1 + num2;
}

main();