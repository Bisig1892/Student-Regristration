window.onload = main;

const programAttr = 'data-program';

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

    // constructor(fName, lName) {
    //     this.firstName = fName;
    //     this.lastName = lName;
    // }
}

function processForm() {
    let newStudent = getStudentFromForm();
    displayStudent(newStudent);
    clearForm();
}

function clearForm() {
    let allTextBoxes = document.querySelectorAll('input[type=text]');
    
    for(let i = 0; i > allTextBoxes.length; i++) {
        let currBox = <HTMLInputElement>allTextBoxes[i];
        currBox.value = '';
    }
}

function displayStudent(s:Student):void{ 
    // Create <li>
    let newItem = document.createElement('li');
    newItem.innerText = s.firstName + ' ' + s.lastName;
    let displaySelection = document.querySelector('#student-list');
    let list = displaySelection.querySelector('ul');
    // Embed student data in <li>
    newItem.setAttribute(programAttr, s.program);
    newItem.setAttribute('data-address', s.address);
    newItem.setAttribute('birthdate', s.dateOfBirth.toString());
    // Call showStudentData when <li> is clicked
    newItem.onclick = showStudentData;
    // Add <li> as a child to <ul>
    list.appendChild(newItem);
}

/**
 * Shows individual student data when a student <li> is clicked
 */
function showStudentData() {
    let currListItem = <HTMLLIElement>this;
    let name = currListItem.innerText;
    let program = currListItem.getAttribute(programAttr);
    document.querySelector('#display > h2').innerHTML = name;
    document.querySelector('#display > p').innerHTML = name + ' is studying ' + program;
}

function getStudentFromForm():Student {
    let newStu = new Student();
    newStu.firstName = getInputValue('firstName');
    newStu.lastName = getInputValue('lastName');
    newStu.dateOfBirth = new Date(getInputValue('dob'));
    newStu.address = getInputValue('address');
    newStu.program = getInputValue('program');
    console.log(newStu);
    return newStu;
}

function getInputValue(id:string):string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}