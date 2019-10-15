window.onload = main;
var programAttr = 'data-program';
function main() {
    var regBtn = document.querySelector('button');
    regBtn.onclick = processForm;
}
var Student = (function () {
    function Student() {
    }
    return Student;
}());
function processForm() {
    var newStudent = getStudentFromForm();
    displayStudent(newStudent);
    clearForm();
}
function displayStudent(s) {
    var newItem = document.createElement('li');
    newItem.innerText = s.firstName + '' + s.lastName;
    var displaySelection = document.querySelector('#student-list');
    var list = displaySelection.querySelector('ul');
    newItem.setAttribute(programAttr, s.program);
    newItem.setAttribute('data-address', s.address);
    newItem.setAttribute('birthdate', s.dateOfBirth.toString());
    newItem.onclick = showStudentData;
    list.appendChild(newItem);
}
function showStudentData() {
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttr);
    document.querySelector('#display > h2').innerHTML = name;
    document.querySelector('#display > p').innerHTML = name + ' is studying ' + program;
}
function getStudentFromForm() {
    var newStudent = new Student();
    newStudent.firstName = getInputValue('first-name');
    newStudent.lastName = getInputValue('last-name');
    newStudent.dateOfBirth = new Date(getInputValue('dob'));
    newStudent.address = getInputValue('address');
    newStudent.program = getInputValue('program');
    console.log(newStudent);
    return newStudent;
}
function getInputValue(id) {
    return document.getElementById('id').value;
}
