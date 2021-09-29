

function convertToNumeric(grade) {
   	if(grade == 'A' || grade == 'a') return 4.0;
	else if(grade == 'B' || grade == 'b') return 3.0;
	else if(grade == 'C' || grade == 'c') return 3.0;
	else if(grade == 'D' || grade == 'd') return 2.0;
	else return 0;
}
function calculateAvg() {
    var studentType = document.getElementById('studentType').value;
    if (studentType == "Undergraduate") {
        var course1Grade = document.getElementById("undergradClass1Grade").value;
        var under1Grade = convertToNumeric(course1Grade);
        var course2Grade = document.getElementById("undergradClass2Grade").value;
        var under2Grade = convertToNumeric(course2Grade);
        var course3Grade = document.getElementById("undergradClass3Grade").value;
        var under3Grade = convertToNumeric(course3Grade);
        var course4Grade = document.getElementById("undergradClass4Grade").value;
        var under4Grade = convertToNumeric(course4Grade);
        var course5Grade = document.getElementById("undergradClass5Grade").value;
        var under5Grade = convertToNumeric(course5Grade);
        var average = (under1Grade + under2Grade + under3Grade + under4Grade + under5Grade)/5;
        if (average < 3.2 ) {
	        document.getElementById("result").innerHTML = 'Thank you for your interest, but you are not eligible to apply for this position.';
	    }
	    else {
	        document.getElementById("result").innerHTML = '"Congratulations". You are eligible to apply for the position. More instructions will be provided at a different time.  ';
	    }
    }
    else if(studentType == "Graduate") {
        var course1Grade = document.getElementById("graduateClass1Grade").value;
        var under1Grade = convertToNumeric(course1Grade);
        var course2Grade = document.getElementById("graduateClass2Grade").value;
        var under2Grade = convertToNumeric(course2Grade);
        var course3Grade = document.getElementById("graduateClass3Grade").value;
        var under3Grade = convertToNumeric(course3Grade);
        var course4Grade = document.getElementById("graduateClass4Grade").value;
        var under4Grade = convertToNumeric(course4Grade);
        var course5Grade = document.getElementById("graduateClass5Grade").value;
        var under5Grade = convertToNumeric(course5Grade);
        var average = (under1Grade + under2Grade + under3Grade + under4Grade + under5Grade)/5;
        if (average < 3.7 ) {
	        document.getElementById("result").innerHTML = 'Thank you for your interest, but you are not eligible to apply for this position.';
	    }
	    else {
	        document.getElementById("result").innerHTML = '"Congratulations". You are eligible to apply for the position. More instructions will be provided at a different time.  ';
	    }

    }
}

function displayCourse() {
    var studentType = document.getElementById('studentType').value;
    if(studentType == 'Undergraduate') {
        var option1 = document.getElementById('option1');
        option1.style.display = "block";
        var option2 = document.getElementById('option2');
        option2.style.display = "none";
    }
    else if (studentType == 'Graduate') {
        var option1 = document.getElementById('option1');
        option1.style.display = "none";
        var option2 = document.getElementById('option2');
        option2.style.display = "block";
    }
    else if (studentType == 'Please Select') {
        var option1 = document.getElementById('option1');
        option1.style.display = "none";
        var option2 = document.getElementById('option2');
        option2.style.display = "none";
    }

}

