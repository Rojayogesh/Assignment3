function Validate(val) {

var reg1=/^[a-zA-Z][a-zA-Z\s]+$/;
var reg2=/^[1-9][0-9]*$/;
var emailid=document.getElementById("eid").value;
var atpos=emailid.indexOf("@");
var dotfirpos=emailid.indexOf(".");
var dotlastpos=emailid.lastIndexOf(".");
var patt=new RegExp("gmail.com");
var reg3=/^[#0-9a-zA-Z][a-zA-Z0-9\s#-]*$/;

//**First Name validation */
if( ( val.id === 'first') && (!document.getElementById("first").value.match(reg1)) ){
    document.getElementById("error").style.display='block';
    document.getElementById("first").value="";
    document.getElementById("first").focus();
    return false;    
}
else if( ( val.id === 'first') && (document.getElementById("first").value.match(reg1)) ){
    document.getElementById("error").style.display='none ';
}

//**Last Name validation */
else if ( ( val.id === 'Last') && (!document.getElementById("Last").value.match(reg1)) ){
    document.getElementById("error1").style.display='block';
    document.getElementById("Last").value="";
    document.getElementById("Last").focus(); 
    return false;  
} 
else if ( ( val.id === 'Last') && (document.getElementById("Last").value.match(reg1)) ){
    document.getElementById("error1").style.display='none ';
}

//**phone No validation */
else if ( ( val.id === 'phno') && ( (!document.getElementById("phno").value.match(reg2)) || (document.getElementById("phno").value.length!=10)) ) {
    document.getElementById("error2").style.display='block';
    document.getElementById("phno").value="";
    document.getElementById("phno").focus();
    return false;    
}
else if ( ( val.id === 'phno') && ( (document.getElementById("phno").value.match(reg2)) || (document.getElementById("phno").value.length == 10)) ) {
    document.getElementById("error2").style.display='none ';
}

//**emailid validation */
else if ( ( val.id === 'eid') && (atpos<1 || dotfirpos<1 || dotlastpos-atpos!=6 || !patt.test(emailid)) ){
    document.getElementById("error3").style.display='block';
    document.getElementById("eid").value="";
    document.getElementById("eid").focus();
    return false;
}
else if ( ( val.id === 'eid') && (atpos>=1 || dotfirpos>=1 || dotlastpos-atpos == 6 || patt.test(emailid)) ){
    document.getElementById("error3").style.display='none ';
}

//**street validation */
else if ( ( val.id === 'street') && (!document.getElementById("street").value.match(reg3)) ){
    document.getElementById("error4").style.display='block';
    document.getElementById("street").value="";
    document.getElementById("street").focus();
    return false;
    }
    else if ( ( val.id === 'street') && (document.getElementById("street").value.match(reg3)) ){
        document.getElementById("error4").style.display='none';   
    }

    //**country validation */
    //**using form name to access the tag */
else if( ( val.id === 'country') && (document.Form.country.selectedIndex=="0") )/**can use document.getElementById/ByName or the form name to access the id/name */
    {
        document.getElementById("error5").style.display='block';
        document.Form.country.value="";
        document.Form.country.focus();
        return false;
    }
    else if( ( val.id === 'country') && (document.Form.country.selectedIndex!="0") ){
        document.getElementById("error5").style.display='none';
    }

//**zipcode validation */
else if( ( val.id === 'zip') && (document.Form.zip.value.length!=6) ){
    document.getElementById("error6").style.display='block';
    document.Form.country.value="";
    document.Form.zip.focus();
    return false;
    }
    else if( ( val.id === 'zip') && (document.Form.zip.value.length == 6) ){
        document.getElementById("error6").style.display='none';
    }

//**To enable submit attribute */
if((!document.getElementById("first").value == '') && (!document.getElementById("Last").value == '') && (!document.getElementById("phno").value == '') && (!document.getElementById("eid").value == '')  && (!document.getElementById("street").value == '') && (!document.Form.country.value == '') && (!document.Form.zip.value == ''))
{
    document.getElementById("signup").removeAttribute("disabled");
}
}

//**Form data into JSON object */
function ConvertToJSON(){
    event.preventDefault();
     var data = {
         "Firstname":document.Form.FirstName.value,
         "Lastname":document.Form.LastName.value,
         "Phone Number":document.Form.PhoneNo.value,
         "Email-id":document.Form.email.value,
         "Street Name":document.Form.street.value,
         "Country":document.Form.country.value,
         "Zipcode":document.Form.zip.value,         
     };

     console.log(data);
}