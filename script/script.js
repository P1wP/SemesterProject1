

// All forms
var forms = document.getElementById("form_container");
var formsArray = forms.querySelectorAll("div");

var internForm = formsArray[0];
var volunteerForm = formsArray[1];
var donationForm = formsArray[2];
var tourForm = formsArray[3];
var snackForm = formsArray[5];
var nightForm = formsArray[6];
var lectureForm = formsArray[7];



// Hide all forms
function hideAll(){
   for(var i = 0; i<formsArray.length; i++){
        if(i == 4){
            //Do nothing
        }
        else{
            formsArray[i].style.display = "none";
        }
   } 
}


// formBtns

var internbtn = document.getElementById("formIntern");
var volunteerBtn = document.getElementById("formVolunteer");
var donationBtn = document.getElementById("formDonation");
var tourBtn = document.getElementById("formTour");
var nightBtn = document.getElementById("formNight");
var lectureBtn = document.getElementById("formLecture");

//btnAction
internbtn.addEventListener("click", function(){
    hideAll();
    internForm.style.display = "block";
    
})

volunteerBtn.addEventListener("click", function(){
    hideAll();
    volunteerForm.style.display = "block";
})

donationBtn.addEventListener("click", function(){
    hideAll();
    donationForm.style.display = "block";
})

tourBtn.addEventListener("click", function(){
    hideAll();
    tourForm.style.display = "block";
})

nightBtn.addEventListener("click", function(){
    hideAll();
    nightForm.style.display = "block";
})

lectureBtn.addEventListener("click", function(){
    hideAll();
    lectureForm.style.display = "block";
})

hideAll();


// Additional formfields
var snackOption = document.getElementById('snack_option');
var show = document.getElementById("alarShow").addEventListener("click", function(){
    snackOption.style.display = "block";
})

var hide = document.getElementById("alarHide").addEventListener("click", function(){
    snackOption.style.display = "none";
})


/* TO DO

FIX EMAIL HINT GMAIL API
FIX CONTACT PAGE
IF TIME 
FIX INDIVIDUAL BUTTONS FOR DIRECT ACCESS TO CORRECT FORM
FIX MY OWN IMAGE CARUSEL
*/