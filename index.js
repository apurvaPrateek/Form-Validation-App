const fullName = document.querySelector("#fullName");
const reminderFname = document.querySelector(".reminder-fname");

fullName.addEventListener("keydown",(event)=>{
   
    let words = event.target.value.split(' ').length;
    
    reminderFname.style.zIndex=1;
    if(event.target.value=='') reminderFname.innerHTML=``;
    else if(words>=2){
        reminderFname.innerHTML=`<i class="fa-solid fa-check"></i>`;
    }else{
        reminderFname.innerHTML=`enter full name`;
    }
    
});

const mobileNo = document.querySelector("#mobileNo");
const reminderMobileNo = document.querySelector(".reminder-mNo");

mobileNo.addEventListener("keydown",(event)=>{
    let str = event.target.value;
    reminderMobileNo.style.zIndex=1;
    // console.log(event.key);
    if(event.key!="Backspace" && (str.length==3 ||str.length==7)) event.target.value+=' ';
    let nums=str.split(" ");
    let str2="";
    nums.forEach(item => {
        str2+=item;
    });
    console.log(!isNaN(str2));
    console.log(str2);
    if(str.length==0) reminderMobileNo.innerHTML=``;
    else if(str.length==11 && !isNaN(str2)){

        reminderMobileNo.innerHTML=`<i class="fa-solid fa-check"></i>`;
        
    }
    
    else {
        reminderMobileNo.innerHTML=`enter valid mobile no.`;
    }
});

let message = document.querySelector("#message");
let reminderMssg = document.querySelector(".reminder-mssg");

message.addEventListener("keydown",(event)=>{
    let words = event.target.value.split(" ").length;
    
    if(words==0) reminderMssg.innerHTML=``;
    else if(words<30){
        reminderMssg.innerHTML=`review must be 30 words long.`;

        reminderMssg.style.fontSize="10px";
    }
    else {
        reminderMssg.innerHTML=`<i class="fa-solid fa-check"></i>`;
    }
})

let email = document.querySelector("#email");
let reminderEmail = document.querySelector(".reminder-email");

function ValidateEmail(input) {
    if (input.match( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      return true;
    } else {
      return false;
    }
  }

email.addEventListener("keydown",(event)=>{
    
    if(email.value=='') reminderEmail.innerHTML=``;
    else if(ValidateEmail(email.value)){
        reminderEmail.innerHTML=`<i class="fa-solid fa-check"></i>`;
    }
    else{
        reminderEmail.innerHTML=`enter valid email`;
    }
})

