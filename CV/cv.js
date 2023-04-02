function myFunction() { 
    var dotss = document.getElementById("dotss");
    var moreText = document.getElementById("more");  
    var readText = document.getElementById("readmore");
  
    if (dotss.style.display === "none") {  
      dotss.style.display = "inline";
      readText.innerHTML = "Read more";  
      moreText.style.display = "none";
    } else { 
        dotss.style.display = "none";
        readText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
  }
  


  function dropdown() {
    document.getElementById("dropdownlang").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.droplang')) {
      var dropdowns = document.getElementsByClassName("dropdownlang-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    } 
  } 


  function changeStyle(){
    var element = document.getElementById("firstdiv");
    element.style.backgroundColor = "#905a0e";
}

function changeStyle2(){
    var element = document.getElementById("firstdiv");
    element.style.backgroundColor = " rgb(125, 103, 158)";
}

function changeStyle3(){ 
    var element = document.getElementById("firstdiv");
    element.style.backgroundColor = "rgb(173, 46, 46)";
}


function changeStyle4(){
    var element = document.getElementById("Seconddiv");
    element.style.backgroundColor = "rgb(170, 170, 132)";
}