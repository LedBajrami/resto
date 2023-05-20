/////////////////////////////////////////////////////////////Menu//////////////////////////////////////////////////////////////////

function openCity(evt, name) {
  let i;
  let tabcontent;
  let tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity2(evt, name) {
  let i;
  let tabcontent;
  let tablinks;

  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}










