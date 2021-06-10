const firstnameInput = document.querySelector('#input-firstName');
const institutionInput = document.querySelector('#input-institutionName');
const gradeA = document.querySelector('#grade-A');
const gradeB = document.querySelector('#grade-B');
const gradeC = document.querySelector('#grade-C');
const gradeD = document.querySelector('#grade-D');
const gradeE = document.querySelector('#grade-E');
const gradeF = document.querySelector('#grade-F');
const courseInput = document.querySelector('#input-course');
const scoreInput = document.querySelector('#input-score');
const unitInput = document.querySelector('#input-unit');
const cancelBtn = document.querySelector('#btn-cancel');
const cancelBtn1 = document.querySelector('#btn-cancel1');
const confirmBtn = document.querySelector('#btn-confirm');
const okBtn = document.querySelector('#btn-ok');
const nextBtn = document.querySelector('#btn-next');
const previousBtn1 = document.querySelector('#btn-previous1');
const previousBtn = document.querySelector('#btn-previous');
const calculateBtn = document.querySelector('#btn-calc');
const doneBtn = document.querySelector('#btn-done');
const courselist1 = document.querySelector('#courseList1');
const courselist = document.querySelector('#courseList');
const user_details_output = document.querySelector('#userDetailsOutput');
const user_details_output1 = document.querySelector('#userDetailsOutput1');
const semester_CourseList = document.querySelector('#semesterCourseList');
const totalGradePoint = document.querySelector('#total-gp');
const totalCreditUnit = document.querySelector('#total-cu');
const cGPA = document.querySelector('#cgpa');


let totalCreditUnits = 0;
let totalGradePoints = 0;
let cgpAverage = 0;

const cls = () => {
    firstnameInput.value = '';
    institutionInput.value = '';
    gradeA.value = '';
    gradeB.value = '';
    gradeC.value = '';
    gradeD.value = '';
    gradeE.value = '';
    gradeF.value = '';
};

cancelBtn1.addEventListener('click', cls);

okBtn.addEventListener('click', () => {
    if (
        firstnameInput.value.trim().length <= 0 ||
        institutionInput.value.trim().length <= 0 ||
        gradeA.value.trim().length <= 0 ||
        gradeB.value.trim().length <= 0 ||
        gradeC.value.trim().length <= 0 ||
        gradeD.value.trim().length <= 0 ||
        gradeE.value.trim().length <= 0 ||
        gradeF.value.trim().length <= 0
    ) {
        alertController.create({
            header: 'Invalid Inputs',
            message: 'Please enter a valid input for each form field!',
            buttons: [
                {
                    text: 'OK',
                    role: 'ok'
                }
            ]
        })
            .then(alertElem => {
                alertElem.present();
            });
        return;
    }
    else if (
        gradeA.value == gradeB.value ||
        gradeA.value == gradeC.value ||
        gradeA.value == gradeD.value ||
        gradeA.value == gradeE.value ||
        gradeA.value == gradeF.value ||
        gradeB.value == gradeC.value ||
        gradeB.value == gradeD.value ||
        gradeB.value == gradeE.value ||
        gradeB.value == gradeF.value ||
        gradeC.value == gradeD.value ||
        gradeC.value == gradeE.value ||
        gradeC.value == gradeF.value ||
        gradeD.value == gradeE.value ||
        gradeD.value == gradeF.value ||
        gradeE.value == gradeF.value
    ) {
        alertController.create({
            header: 'Invalid Inputs',
            message: 'Minimum score is unique for each grade!',
            buttons: [
                {
                    text: 'OK',
                    role: 'ok'
                }
            ]
        })
            .then(alertElm => {
                alertElm.present();
            });
        return;
    } else if (
        gradeA.value < gradeB.value ||
        gradeA.value < gradeC.value ||
        gradeA.value < gradeD.value ||
        gradeA.value < gradeE.value ||
        gradeA.value < gradeF.value ||
        gradeB.value < gradeC.value ||
        gradeB.value < gradeD.value ||
        gradeB.value < gradeE.value ||
        gradeB.value < gradeF.value ||
        gradeC.value < gradeD.value ||
        gradeC.value < gradeE.value ||
        gradeC.value < gradeF.value ||
        gradeD.value < gradeE.value ||
        gradeD.value < gradeF.value ||
        gradeE.value < gradeF.value
    ) {
        alertController.create({
            header: 'Invalid Inputs',
            message: 'Minimum score should be in descending order!',
            buttons: [
                {
                    text: 'OK',
                    role: 'ok'
                }
            ]
        })
            .then(alertElm => {
                alertElm.present();
            });
        return;
    } else if (
        gradeA.value > 100 ||
        gradeB.value > 100 ||
        gradeC.value > 100 ||
        gradeD.value > 100 ||
        gradeE.value > 100 ||
        gradeF.value > 100
    ) {
        alertController.create({
            header: 'Error',
            message: 'Invalid input(s)!!!',
            buttons: [
                {
                    text: 'OK',
                    role: 'ok'
                }
            ]
        })
            .then(alertElm => {
                alertElm.present();
            });
        return;
    } else if (
        firstnameInput.value.trim().length > 0 ||
        institutionInput.value.trim().length > 0 ||
        gradeA.value.trim().length > 0 ||
        gradeB.value.trim().length > 0 ||
        gradeC.value.trim().length > 0 ||
        gradeD.value.trim().length > 0 ||
        gradeE.value.trim().length > 0 ||
        gradeF.value.trim().length > 0
    ) {
        const enteredFirstName = firstnameInput.value;
        const enteredInstitution = institutionInput.value;
        const enteredGradeA = gradeA.value;
        const enteredGradeB = gradeB.value;
        const enteredGradeC = gradeC.value;
        const enteredGradeD = gradeD.value;
        const enteredGradeE = gradeE.value;
        const enteredGradeF = gradeF.value;

        alertController.create({
            header: 'Validation',
            message: 'Are your inputs are correct!',
            buttons: [
                {
                    text: 'No',
                    role: 'ok'
                },
                {
                    text: 'Yes!!!',
                    handler: () => {
                        const newItem = document.createElement('ion-item');
                        const newItem1 = document.createElement('ion-list');
                        newItem.textContent = 'Name: ' + enteredFirstName + '; Institution: ' + enteredInstitution;
                        newItem1.textContent = 'Grade A: ' + enteredGradeA + ';' + "\n"
                            + ' Grade B: ' + enteredGradeB + ';' + "\n"
                            + ' Grade C: ' + enteredGradeC + ';' + "\n"
                            + ' Grade D: ' + enteredGradeD + ';' + "\n"
                            + ' Grade E: ' + enteredGradeE + ';' + "\n"
                            + ' Grade F: ' + enteredGradeF;
                        user_details_output.appendChild(newItem);
                        user_details_output1.appendChild(newItem1);

                        cls();
                        document.getElementById("userDetails").style.display = "none";
                        document.getElementById("userDetailsO").style.display = "block";
                    }
                }
            ]
        })
            .then(alertElm => {
                alertElm.present();
            });
        nextBtn.addEventListener('click', () => {
            document.getElementById("courseDetails").style.display = "block";
            document.getElementById("userDetailsO").style.display = "none"

        });

        const clear = () => {
            courseInput.value = '';
            scoreInput.value = '';
            unitInput.value = '';
        };

        confirmBtn.addEventListener('click', () => {
            if (
                courseInput.value.trim().length <= 0 ||
                scoreInput.value <= 0 ||
                scoreInput.value.trim().length <= 0 ||
                unitInput.value < 0 ||
                unitInput.value.trim().length <= 0
            ) {
                // alert('Invalid values');
                alertController.create({
                    header: 'Invalid Inputs',
                    message: 'Please, enter valid course title, credit unit and score!',
                    buttons: ['OK']
                })
                    .then(alertElement => {
                        alertElement.present();
                    });
                return;
            }
            else if (
                courseInput.value.trim().length > 0 ||
                scoreInput.value > 0 ||
                scoreInput.value.trim().length > 0 ||
                unitInput.value.trim().length > 0
            ) {
                const enteredCourse = courseInput.value;
                const enteredScore = scoreInput.value;
                const enteredUnit = unitInput.value;

                alertController.create({
                    header: 'Validation!!!',
                    message: 'Do you want to enter a new course?',
                    buttons: [
                        {
                            text: 'Yeah!!!',
                            handler: () => {
                                const newItem = document.createElement('ion-item');
                                newItem.textContent = 'Course Code: ' + enteredCourse + '; Score: ' + enteredScore + '/100; ' + 'Credit Unit: ' + enteredUnit;

                                courselist1.appendChild(newItem);
                                clear();

                            }
                        },
                        {
                            text: 'No',
                            handler: () => {
                                document.getElementById("courseDetails").style.display = "none";
                                document.getElementById("courseDetailsO").style.display = "block";
                                const newItem = document.createElement('ion-item');
                                newItem.textContent = 'Course Code: ' + enteredCourse + '; Score: ' + enteredScore + '/100; ' + 'Credit Unit: ' + enteredUnit;

                                courselist.appendChild(courselist1);
                                courselist.appendChild(newItem);
                                clear();

                            }
                        }
                    ]
                })
                    .then(alertElm => {
                        alertElm.present();
                    });

                var grade;
                var gradePoint;

                calculateBtn.addEventListener('click', () => {
                    if (enteredScore >= enteredGradeA && enteredScore <= 100) {
                        gradePoint = 5 * enteredUnit;
                        grade = 'A';
                    } else if (enteredScore >= enteredGradeB && enteredScore < enteredGradeA) {
                        gradePoint = 4 * enteredUnit;
                        grade = 'B';
                    } else if (enteredScore >= enteredGradeC && enteredScore < enteredGradeB) {
                        gradePoint = 3 * enteredUnit;
                        grade = 'C';
                    } else if (enteredScore >= enteredGradeD && enteredScore < enteredGradeC) {
                        gradePoint = 2 * enteredUnit;
                        grade = 'D';
                    } else if (enteredScore >= enteredGradeE && enteredScore < enteredGradeD) {
                        gradePoint = 1 * enteredUnit;
                        grade = 'E';
                    } else if (enteredScore >= enteredGradeF && enteredScore < enteredGradeE) {
                        gradePoint = 0 * enteredUnit;
                        grade = 'F';
                    }
                    const newItem = document.createElement('ion-item');
                    newItem.textContent = 'Course Code: ' + enteredCourse + '; Score: ' + enteredScore + '/100; ' + 'Credit Unit: ' + enteredUnit
                        + '; Grade: ' + grade + '; GP: ' + gradePoint;

                    semester_CourseList.appendChild(newItem);

                    totalGradePoints += +gradePoint;
                    totalGradePoint.textContent = totalGradePoints;

                    totalCreditUnits += +enteredUnit;
                    totalCreditUnit.textContent = totalCreditUnits;

                    cgpAverage = totalGradePoints / totalCreditUnits;
                    cGPA.textContent = cgpAverage;

                    document.getElementById("output").style.display = "block";
                    document.getElementById("courseDetailsO").style.display = "none";
                });

                return;
            }
        });

        cancelBtn.addEventListener('click', clear);
        return;
    }
});

doneBtn.addEventListener('click', () => {
    document.getElementById("output").style.display = "none";
    document.getElementById("userDetails").style.display = "block";
});