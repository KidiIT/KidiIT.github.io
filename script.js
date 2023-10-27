let calculatorForm = document.forms.calculatorform 
let userInput = document.querySelectorAll("input");
let outputMyAge = document.querySelectorAll(".result_container");
let userYear = document.getElementById("useryear");
let userMonth= document.getElementById("usermonth");
let userDay = document.getElementById("userday");
let mainHead= document.getElementById("main_heading");
mainHead.style.color = "blue";



const date= new Date()
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() +1;
const currentDay = date.getDay();

const together = [currentYear,currentMonth,currentDay];
//console.log(together);
calculatorForm.onsubmit= (e)=>{ 
    e.preventDefault();
    console.log(e.target);
    let formErr = { 
        dayErr: "",
        monthErr: "",
        yearErr: "",
    }
    let day = calculatorForm.day.value.trim();
    let month = calculatorForm.month.value.trim();
    let year = calculatorForm.year.value.trim();
    if(day == "" || day > 31 ){
        formErr.dayErr = "must be a valid day"; 
    }else if(month.value == ""){
        formErr.monthErr= "must be a valid month";

    }else if(month < 1 || month > 12){
        formErr.monthErr = "must be a valid month";
    }else if(year.value == ""){
        formErr.yearErr = "year is required";

    }else if(year < 1 || year > 2023){
        formErr.yearErr = "must be a valid year";

    }else{
        console.log({day,month,year});
        calculateUserAge();
    }
   
    let errElement = document.querySelectorAll(".err");
    for(let i=0; i < errElement.length; i++){
       let errElements = errElement[i]

       console.log(formErr)
       errElements.innerHTML = formErr[""+errElements.dataset.err+""]
    }

    function  calculateUserAge() {
        let userAge = currentYear - year
        userYear.style.color="blue";
       userYear.innerHTML= userAge
       let userAgeMonth =currentMonth - month + 1
       userMonth.style.color ="blue";
       userMonth.innerHTML= userAgeMonth
       let userBirthDay= currentDay - day + 31
       userDay.style.color="blue";
       userDay.innerHTML= userBirthDay

      

        

    }

    
     
    


    
    



        
}




    


    










    
    

    












