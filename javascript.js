
  function giveinput(){
	 var inputval = document.getElementById('place').value;
	alert( 'YOUR DESTINATION : ' + inputval);

	var date1 = document.getElementById('check1').value;
    alert("CHECK IN: " + date1);

    var date2 = document.getElementById('check2').value;
    alert("CHECK OUT: " + date2);

    var dropdown = document.getElementById('choose').value;
    alert("TRAVELERS : " + dropdown);

    changedisplay();
}
function changedisplay(){
  document.getElementById("section").style.visibility ='visible'; 
  document.getElementById("section").style.opacity ='1'; 
  document.getElementById("section").style.transitionTimingFunction = "linear";
  document.getElementById("section").style.transitionProperty = "visibility,opacity"; 
  document.getElementById("section").style.transitionDuration = "3s";
}
