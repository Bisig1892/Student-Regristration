window.onload = main;
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
