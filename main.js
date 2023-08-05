let calculateBtn = document.getElementById("calculateBtn"); 
let itemCount = document.getElementById("itemCount");
let subjectsDiv = document.getElementById("subjects");
let credits = []
let grades = []

function showSubjects(){
    let labelEl = document.querySelector(".option-panel label")
    labelEl.textContent = itemCount.value
    subjectsDiv.innerHTML = " "
    for (let i = 0; i < itemCount.value; i++) {
        let subject = document.createElement("div")
        subject.className = "subject"
        subject.id = `subject-${i}`
        subject.innerHTML = `
        
        <h2>${i+1}st Subject</h2>
        <input type="text"  placeholder="Enter the credit" id="credit-${i}">
        <input type="text" placeholder="Enter the grade" id="grade-${i}">
        `
        subjectsDiv.append(subject)
    }
}
let calculateGPA = function(){
    credits = []
    grades = []
    let gpa = 0;
    for(let i = 0; i<itemCount.value; i++){
        let creditValue = document.getElementById(`credit-${i}`)
        let gradeValue = document.getElementById(`grade-${i}`)

        credits.push(Number(creditValue.value))
        grades.push(Number(gradeValue.value))
    }

    for(let i = 0; i<itemCount.value; i++){
        gpa += credits[i]*grades[i];
        
    }
    if(itemCount.value>7){
        alert("Overall GPA is " + gpa/30)
    }else{
        alert("Overall GPA is " + gpa/60)
    }
}

itemCount.addEventListener("input",showSubjects)
calculateBtn.addEventListener("click",calculateGPA)





