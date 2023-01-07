function openTab(item,element,color) {
    var i, tabcontent, tablinks;
    // erase all the contents before (so the selected one can be shown)
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      console.log("i: ",i)
      tabcontent[i].style.display = "none";
    }
    // erase all the other buttons' color
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    //background color of the button
    document.getElementById(item).style.display = "block";
    element.style.backgroundColor = color;
  
  }
  // Get the element with id="defaultOpen" and click on it
//   document.getElementById("defaultOpen").click();