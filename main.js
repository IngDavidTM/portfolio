function myFunction() { 
  var x = document.getElementById("hide-menu");
  var y = document.querySelector('.toolbar');
  if (x.style.display === "flex") { 
    x.style.display = "none"; 
    y.style.display = "flex";
  } else { 
    x.style.display = "flex"; 
    y.style.display = "none";
  } 
}
 