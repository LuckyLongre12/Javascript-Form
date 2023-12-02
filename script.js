
    

    function hide(){
   const hide = document.querySelector('.second-nav');
            hide.style.right = '0';
document.querySelector('#icon1').style.display = 'none';
    }
    function close1(){
        const hide = document.querySelector('.second-nav');
            hide.style.right = '-1000px';
document.querySelector('#icon1').style.display = 'block';
    }
    
    
    
        /* Targeting All Required Elements.*/
 let nxtBtn = document.querySelector('#nxt');
 let showBtn = document.querySelector('#show-btn');
 let loginBtn = document.querySelector('#login');
 let qrImg = document.querySelector('#img');
 let Last = document.querySelector('.card3-col');
 let lastBtn = document.querySelector('.last-btn'); 
 let passwordInput = document.getElementById('password');
 let showPasswordCheckbox = document.getElementById('showPassword');
 let Card1 = document.querySelector('.card'); 
 let Card2 = document.querySelector('.card2');
 let Txt1 = document.querySelector('#text-1');
    let Txt2 = document.querySelector('#text-2');
    let Txt3 = document.querySelector('#text-3');
    let Txt4 = document.querySelector('#text-4');
    let Txt5 = document.querySelector('#text-5');
    let Txt6 = document.querySelector('#text-6');
let otpContainer =  document.querySelector('.OTP-BOX');
let closeBtn = document.querySelector('#close');
let submitBtn= document.querySelector('#submit');
let otpBox = document.querySelector('.custom');
 

      /* Functional Java Script Code  */
 nxtBtn.addEventListener('click',()=>{
   otpContainer.style.marginTop = '0';
   closeBtn.style.marginTop = '0';
   Txt1.innerHTML = random();
   Txt2.innerHTML = random();
   Txt3.innerHTML = random();
   Txt4.innerHTML = random();
   Txt5.innerHTML = random();
   Txt6.innerHTML = random();
   submitBtn.style.display = 'block';
   otpBox.style.marginTop = "20px";
   nxtBtn.style.opacity = '0';
 });
 
 nxtBtn.addEventListener('dblclick',()=>{
   otpContainer.style.marginTop = '0';
   closeBtn.style.marginTop = '0';
   Txt1.innerHTML = random();
   Txt2.innerHTML = random();
   Txt3.innerHTML = random();
   Txt4.innerHTML = random();
   Txt5.innerHTML = random();
   Txt6.innerHTML = random();
   submitBtn.style.display = 'block';
   otpBox.style.marginTop = "20px";
   nxtBtn.style.opacity = '0';
 });
 
 submitBtn.addEventListener('click',()=>{
     Card2.style.display = 'block';
     Card1.style.display = 'none'; 
     submitBtn.style.display = 'none';
 });
    
 
 closeBtn.addEventListener('click',()=>{
      otpContainer.style.marginTop = '-1000px';
   closeBtn.style.marginTop = '-1000px';
 });
 
 showBtn.addEventListener('click',()=>{
     qrImg.style.filter = 'blur(0)';
 });
 
 loginBtn.addEventListener('click',()=>{
    var x =  prompt('Enter Your Registration Token Number');
     if (x =='ABCD2017') {
         alert('Login Successfull');
         Card2.style.display = 'none';
         Last.style.display = 'block'
     }
  else{
         alert('WRONGE TOKEN NUMBER');
     }
 });
 
lastBtn.addEventListener('click',()=>{
    Card1.style.display = 'block';
    Last.style.display = 'none';
    otpBox.style.marginTop = "-1000px";
    nxtBtn.style.opacity = '1';
    });
        showPasswordCheckbox.addEventListener('change', function()  {
      passwordInput.type = this.checked ? 'text' : 'password';
    }); 

 function random() {
        var num = '0123456789';
        var otp = '';
        for (i = 0; i < 1; i++) {
         otp += num[Math.floor(Math.random()*9)]
        }
        return otp;
    }
    
    function home() {
        Card1.style.display = 'block';
        Card2.style.display = 'none';
        Last.style.display = 'none';
        nxtBtn.style.display = 'block';
        nxtBtn.style.opacity = '1';
        nxtBtn.style.marginTop = '160px';
        nxtBtn.style.marginLeft = '230px';
        otpContainer.style.display = 'none';
        closeBtn.style.display = 'none';
        otpBox.style.display = 'none';
        submitBtn.style.display = 'none';
    }
    
    function QR() {
        Card1.style.display = 'none';
        Card2.style.display = 'block';
        Last.style.display = 'none';
        nxtBtn.style.display = 'none';
        nxtBtn.style.opacity = '1';
        nxtBtn.style.marginTop = '160px';
        nxtBtn.style.marginLeft = '230px';
        otpContainer.style.display = 'none';
        closeBtn.style.display = 'none';
        otpBox.style.display = 'none';
        submitBtn.style.display = 'none';
    }
    
 
   function log() {
   otpContainer.style.marginTop = '0';
   closeBtn.style.marginTop = '0';
   Txt1.innerHTML = random();
   Txt2.innerHTML = random();
   Txt3.innerHTML = random();
   Txt4.innerHTML = random();
   Txt5.innerHTML = random();
   Txt6.innerHTML = random();
   submitBtn.style.display = 'block';
   otpBox.style.marginTop = "20px";
   nxtBtn.style.opacity = '0';
   Card1.style.display = 'block'
   Card2.style.display = 'none';
   Last.style.display = 'none';
   }
   


    

