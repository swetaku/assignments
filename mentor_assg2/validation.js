function validate(){
	var a = $("input[name='uname']").val();  //validation for username
	var reg =/\b[a-zA-Z]+\b/;
	if(reg.test(a) && a.length > 3 && a.length < 8){
		console.log(a);
		$("#unamemsg").html(" ");
	}
	else
	{
		$("#unamemsg").html("Not Valid");
	}
	
	//validation for email id
	var b = $("input[name='eid']").val();
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regex.test(b)){
		console.log(b);
		$("#eidmsg").html(" ");
	}
	else{
	    $("#eidmsg").html("Not Valid");
	}
	
	//validation for password
	var c = $("input[name='pwd']").val();
	re = /^[a-zA-Z0-9]{7,10}$/;
	if(re.test(c)){
		$("input[name='pwd']").val();
	}
	else
	{
	    console.log(c);
		alert("password must have atleast 7 characters consisting of lower case,upper case and digits");
	}
	
	//confirming the re-entered password
	var d = $("input[name='cpwd']").val();
	if(d === c){
	   console.log(d);
	   $("#cpwdmsg").html("password confirmed");
	}
	else{
	 
		$("#cpwdmsg").html("Passwords do not match ");
	}
	
	//validation for employee id
	var e = $("input[name='empid']").val();
	regex = /\b[0-9]+\b/;
	if(regex.test(e) && e.length > 0 && e.length < 6){
	     console.log(e);
		$("#empidmsg").html(" ");
		}
	else{
		$("#empidmsg").html("Not Valid");
	}
	
	//taking the input of radio button
	var f=$('input[name=editLst]:checked', '#myform').val();
	console.log(f);
	
	
	var g = $("input[name='firstname']").val();
	var h = $("input[name='lastname']").val();
	var i = $("input[name='loc']").val();
	var j = $("input[name='abt']").val();
	
	
	//showing all the entered values in the alert window 
	alert("The entered fields are:\n"+a+"\n"+b+"\n"+c+"\n"+d+"\n"+e+"\n"+f+"\n"+g+"\n"+h+"\n"+i+"\n"+j+"\n");
	
	
	//checking if any of the input fields is not filled then displaying an error message above the form
	if(a==""||b==""||c==""||d==""||e==""||f==""||g==""||h==""||i==""||j==""){
		$("#errormsg").html("ALL entries not filled.");
	}

}

function reset(){
	/*$("input[name='uname']").val(" ");
	$("input[name='eid']").val(" ");
	$("#pd1").val(" ");
	$("#pd2").val(" ");
	$("input[name='eid']").val(" ");
	$("input[name='empid']").val(" ");
	$('input[name="editLst"]').prop('checked', false);
	$("input[name='firstname']").val(" ");
	$("input[name='lastname']").val(" ");
	$("input[name='loc']").val(" ");
	$("input[name='abt']").val(" ");
	$("#unamemsg").html(" ");
	$("#eidmsg").html(" ");
	$("#empidmsg").html(" ");*/
	
	$("#myform").trigger("reset"); //resets the form fields.
	$("#myform1").trigger("reset");
	$("#unamemsg").html(" ");   //resetting the spans
	$("#eidmsg").html(" ");
	$("#cpwdmsg").html(" ");
	$("#empidmsg").html(" ");
}