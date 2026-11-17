
function themeSwitch(){
   docstyle = document.body.style;
   if(docstyle.getPropertyValue("--color-primary") == "#FFC2E1"){
      docstyle.setProperty("--color-primary", "#00ddc0");
      docstyle.setProperty("--color-secondary", "#0A000A");
      docstyle.setProperty("--color-tertiary", "#FF8FF8");
      docstyle.setProperty("--color-gradient", "#0eeadf");  
   }
   else{
      docstyle.setProperty("--color-primary", "#FFC2E1");
      docstyle.setProperty("--color-secondary", "#FFE6F2");
      docstyle.setProperty("--color-tertiary", "#FF8AC4");
      docstyle.setProperty("--color-gradient", "#FFE6F2");  
   }
}

function button(){
   var button = document.getElementById("theme");
   if(button.addEventListener){
      button.addEventListener("click", themeSwitch);
   }
}
