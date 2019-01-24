// validate user id and pass
var attempt = 3;  
var validateUserIdPass = function validateUserIdPass(){
   var email = document.getElementById("email").value;
   var pswrd = document.getElementById("password").value;
   if( email == 'test@gmail.com' && pswrd == 'test1234'){
     alert("Welcome ! You Login Successfully");
     location.href = 'instructions.html';
     sessionTimerCount();
    }else {
        attempt--;
        alert("You have left " + attempt + " attempts.");
        document.getElementById("errorMsg").innerHTML = "Wrong Id or Password!";
        //location.href = 'fail.html';
        if(attempt == 0){
          alert("You attempt maximum number of login! Please try after some time.")
          document.getElementById("email").disabled = true;
          document.getElementById("password").disabled = true;
          document.getElementById("submit").disabled = true;
          return false;
        }
    }
}

 // ----------------instructions page session code--------------------------
 var sessionTimerCount = function sessionTimerCount(){
  var timeOut = 5;
  var secondsTimer = null;
  var secondsCounter = 0;
 
  document.onclick = function() { secondsCounter = 0; };
  document.onmousemove = function() { secondsCounter = 0; };
  document.onkeypress = function() { secondsCounter = 0; };
  var secondsTimer = window.setInterval(checktime, 1000);
  
  function checktime(){
     secondsCounter++;
     var oPanel = document.getElementById("timeOutCount");
     if(oPanel){
       oPanel.innerHTML = (timeOut - secondsCounter);
     }
     if(secondsCounter >= timeOut){
        window.clearInterval(secondsTimer);
        alert("Your session has expired. Please login again.");
        location.href = 'index.html';
     }
  }

 }

 
 // --------------- quiz page ----------------------------------------------
 var quizSaveBtn = function quizSaveBtn(){
   alert("You have saved successfully");
 }

// exam count down timer code goes here
var myCountDownTimer = function myCountDownTimer(duration, display) {
    try{
        var timer = duration, minutes, seconds;
        function countDownTimer() {
           minutes = parseInt(timer / 60);
           seconds = parseInt(timer % 60);
           if(minutes == 00 && seconds == 00){
              clearInterval(clear);
              location.href = 'close.html';
              alert("Your time is over! exit the exam");
            }
           minutes = minutes < 10 ? "0" + minutes : minutes;
           seconds = seconds < 10 ? "0" + seconds : seconds;
           display.textContent = minutes + ":" + seconds;
           --timer;
        }
        var clear = setInterval(countDownTimer, 1000);
      } catch(err){
        console.log("error occured while myCountDownTimer" + err);
    }
}

   window.onload = function callTimer() {
     var duration = 60 * 0.5;
     // vanilla javascript 
     display = document.querySelector('#displayTime');

     // java script code
     //display = document.getElementById("displayTime");
     myCountDownTimer(duration, display);
   }; 
  
   // -----------------------close window page--------------------------------
   function closeCurrentWindow(){
     window.close();
   }  


   var dashBoard = function dashBoard(){
    validateUserIdPass();
    
    myCountDownTimer();
   }


  