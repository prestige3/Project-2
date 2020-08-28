var time = 30;

function printvalue(){
console.log(time + 20);
}
function changecolor(){
	document.getElementById('tag').style.background = "red";
    document.getElementById("tag").innerHTML = 'SPEED'
 }
 function changename(){
 	var uservalue = document.getElementById('bet').value;
 	var join = uservalue + "joined";
//  	document.getElementById('gett').innerHTML = join; 
//  var option = document.querySelector('input[name="class"]:checked').value;
//         alert(option)
// var values ='';
//    var list = document.getElementsByName('select');
//    for(i = 0 ; i < list.length ; i++){
//    	if(list[i].checked){
//    		values = values + list[i].value;
//    	}
//    }
//    alert(values);
var get = document.getElementById('choose').value;
 alert(get);

 var got = document.getElementById('year').value;
 alert(got);

  }