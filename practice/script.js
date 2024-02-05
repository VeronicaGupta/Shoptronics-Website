function initAccordion(accordionElem){
    
    //when panel clicked
    function handlePanelClick(event){
        showPanel(event.currentTarget);
    }
    
    //hide current panel and show new panel
    function showPanel(panel){
        //hide current one (which initially will be null)
        var expandedPanel = accordionElem.querySelector(".active");        
        if (expandedPanel){            expandedPanel.classList.remove("active");
        }
        
        //show new one
        panel.classList.add("active");
    }
    
    var allPanelElems= accordionElem.querySelectorAll(".QA");
    
    for(var i=0, len=allPanelElems.length; i<len; i++){
        allPanelElems[i].addEventListener("click", handlePanelClick);
    }
    
    //by default show first panel
    showPanel(allPanelElems[0])
}

initAccordion(document.getElementById("jsp"));


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

//get the modal
var modal=document.getElementById("myModal");

//button opening modal
var btn=document.getElementById("myBtn");

//get the <span> element that closes the modal
var span=document.getElementsByClassName("close")[0];

//when the user clicks the button, open the modal
btn.onclick=function(){
    modal.style.display="block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myfunction(){
    var x = document.getElementById("myDIV");
    
    if (x.style.display==="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
