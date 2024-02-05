//Add to the cart
function addtocart(){
  alert("Item added to CART!!")
}


//clickable slider for Appliances and Gadgets (multiple slider)
var sliderIndex = 1;
function ShowSlider(mySlider, dots){
showSlider(sliderIndex, mySlider, dots);
}

function plusSlider(n, mySlider, dots) {
  showSlider(sliderIndex += n, mySlider, dots);
}

function currentSlider(n, mySlider, dots) {
  showSlider(sliderIndex = n, mySlider, dots);
}

function showSlider(n, mySlider, dots) {
  var i;
  var slider = document.getElementsByClassName(mySlider);
  var button_dots = document.getElementsByClassName(dots);
  if (n > slider.length) 
  {
  sliderIndex = 1
  }

  if (n < 1) 
  {
    sliderIndex = slider.length
  }

  for (i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }

  for (i = 0; i < button_dots.length; i++) {
    button_dots[i].className = button_dots[i].className.replace(" Active", "");
  }

  slider[sliderIndex-1].style.display = "block";
  button_dots[sliderIndex-1].className += " Active";
}


//form1- login
function openForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
}

function validationForm1(){
  var email=document.getElementById("mail").value;  
  var pass=document.getElementById("pass").value;  
  var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filterEmail.test(email)) {
  alert('Please provide a valid email address!');
  email.focus;
  return false;
  }
  else if(pass.length<6){  
    alert("Please enter a valid password at least 6 characters with a capital letter!");  
    pass.focus;
    return false;  
  }

  alert('Welcome back! Latest offers just for YOU !!!');
}

//form2- signup
function openForm2() {
  document.getElementById("signupForm").style.display = "block";
}

function closeForm2() {
  document.getElementById("signupForm").style.display = "none";
}

function validationForm2(){
  var name = document.getElementById("nam").value; 
  var email=document.getElementById("emai").value;  
  var pass=document.getElementById("pas").value;  
  var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name.length<8) {
  alert('Please provide a valid name!');
  name.focus;
  return false;
  }
  else if (!filterEmail.test(email)) {
  alert('Please provide a valid email address!');
  email.focus;
  return false;
  }
  else if(pass.length<6){  
    alert("Please enter a valid password at least 6 characters with a capital letter!");  
    pass.focus;
    return false;  
  }

  alert('Welcome to SHOPTRONIX ' + name + '!');
}

//feedbackForm- contactus
function validationFeedbackForm(){
  var name = document.getElementById("name").value;  
  var email = document.getElementById("mail1").value;
  var mobile = document.getElementById("mobile").value;
  var query = document.getElementById("query").value;

  var filterMobile =  /^\d{10}$/;
  var filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name.length<8) {
  alert('Please provide a valid name!');
  name.focus;
  return false;
  }
  else if (!filterEmail.test(email)) {
  alert('Please provide a valid email address!');
  email.focus;
  return false;
  }
  else if (!filterMobile.test(mobile)) {
  alert('Please provide a valid 10 digits mobile number!');
  mobile.focus;
  return false;
  }
  else if (query==null || query=="") {
  alert('Please provide your query.');
  query.focus;
  return false;
  }
  var confirmation = confirm("Are you sure you want to proceed?");

  if (confirmation){
    alert('Your response is saved, our executives will contact you in 48 hours. Thank you for choosing us!');
    return True;
  }
  else{
    return false;
  }  
}

//Multiple Modal for items description
function openModal(detailId){
  document.getElementById(detailId).style.display="block";
}
function closeModal(closeId){
  document.getElementById(closeId).style.display="none";
}

//Slider code
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
});

function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n+2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n+1)}, 4000);
  }
}

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n+1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" Active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " Active";
}

pause =()=> {
  clearInterval(myTimer);
}

resume =()=>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
}
