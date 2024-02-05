var modal=document.getElementsByClassName("modal")

//get the modal
var modal1=document.getElementById("myModal1");
var modal2=document.getElementById("myModal2");
var modal3=document.getElementById("myModal3");
var modal4=document.getElementById("myModal4");

//button opening modal
var btn1=document.getElementById("one");
var btn2=document.getElementById("two");
var btn3=document.getElementById("three");
var btn4=document.getElementById("four");

//when the user clicks the button, open the modal
btn1.onclick=function(){
    modal1.style.display="block";
}
btn2.onclick=function(){
    modal2.style.display="block";
}
btn3.onclick=function(){
    modal3.style.display="block";
}
btn4.onclick=function(){
    modal4.style.display="block";
}


//get the <span> element that closes the modal
var span1=document.getElementById("close1");
var span2=document.getElementById("close2");
var span3=document.getElementById("close3");
var span4=document.getElementById("close4");

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";

}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1 | event.target == modal2 | event.target == modal3 | event.target == modal4) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
  }
}


//carazal
let liEls = document.querySelectorAll('ul li');
let index=0;
window.show = function(increase){
    index=index+increase;
    index=Math.min(
        Math.max(index,0),
        liEls.length-1
    );
    liEls[index].scrollIntoView({behavior: 'smooth'});
}