window.onload = main;

function main() {
    let regBtn = document.querySelector('button');
    regBtn.onclick = processForm;
}
/**
 * Represents a college student
 */
class Student {
    firstName:string;
    lastName:string;
    dateOfBirth:Date;

    /**
     * The full address of the student
     * Street, City, State, Zip
     */
    address:string;

    /**
     * Program of study 
     */
    program:string;
}

function processForm() {
    let newStudent = getStudentFromForm();
    displayStudent(newStudent);
    clearForm();
}

function getStudentFromForm():Student {
    let newStudent = new Student();
    newStudent.firstName = getInputValue('first-name');
    newStudent.lastName = getInputValue('last-name');
    newStudent.dateOfBirth = new Date(getInputValue('dob'));
    newStudent.address = getInputValue('address');
    newStudent.program = getInputValue('program');
    console.log(newStudent);
    return newStudent;
}

function getInputValue(id:string):string {
    return (<HTMLInputElement>document.getElementById('id')).value
}