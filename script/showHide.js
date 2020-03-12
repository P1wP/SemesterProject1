//hidden content
var kids = document.getElementById("hidden_kids");
var teacher = document.getElementById("hidden_teacher");

//buttons
var kidsBtn = document.getElementById("hide_btn");
var teacherBtn = document.getElementById("hide_btn_2");

//Toggle action on click
kidsBtn.addEventListener("click", kidsSh);
teacherBtn.addEventListener("click", teacherSh);

function kidsSh(){
  if (kids.style.display == 'block') {
      kids.style.display = 'none';
      kidsBtn.innerHTML = 'More';
    }
    else {
      kids.style.display = 'block';
      kidsBtn.innerHTML = 'Less';
    }
  
}

function teacherSh(){
    if (teacher.style.display == 'block') {
      teacher.style.display = 'none';
      teacherBtn.innerHTML = 'More';
    }
    else {
      teacher.style.display = 'block';
      teacherBtn.innerHTML = 'Less';
    }
    
}