var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



var acc = document.getElementsByClassName("accord-img");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  
    this.classList.toggle("scale");
   
  });
}




var acc = document.getElementsByClassName("select-button");
var i;
  

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  
    var activeElement = document.querySelector(".active");    

    activeElement.classList.remove("active");

    this.classList.toggle("active");
   
  });
}
