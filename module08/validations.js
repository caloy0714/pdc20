function confirm(){
    if(document.empForm.empid.value==""){
        document.getElementById("empErr").innerHTML = "Please enter employee ID";
        return false;
    }

    if(document.empForm.fname.value==""){
        document.getElementById("lfnameErr").innerHTML = "Please enter your first name";
        return false;
    }

    if(document.empForm.lname.value==""){
        document.getElementById("lnameErr").innerHTML = "Please enter your last name";
        return false;
    }

    if(document.empForm.address.value==""){
        document.getElementById("addressErr").innerHTML = "Please enter your address";
        return false;
    }

    if(document.empForm.department.value==""){
        document.getElementById("departmentErr").innerHTML = "Please enter your department";
        return false;
    }

    if(document.empForm.position.value==""){
        document.getElementById("positionErr").innerHTML = "Please enter your position";
        return false;
    }
    
    if(document.empForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    } else {
        var regex = /^\$+@\S+\.\S+$/;
        if(regex.test(document.empForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }

    if(document.empForm.contact.value==""){
        document.getElementById("contactErr").innerHTML = "Please enter your contact number";
        return false;
    }

    if(document.empForm.department.value==""){
        document.getElementById("salaryErr").innerHTML = "Please enter your salary";
        return false;
    }

    if(document.empForm.department.value==""){
        document.getElementById("departmentErr").innerHTML = "Please enter your department";
        return false;
    }

    if(document.empForm.position.value==""){
        document.getElementById("positionErr").innerHTML = "Please enter your position";
        return false;
    }

    if(document.empForm.department.value==""){
        document.getElementById("departmentErr").innerHTML = "Please enter your department";
        return false;
    }

    if(document.empForm.uname.value==""){
        document.getElementById("unameErr").innerHTML = "Please enter your username";
        return false;
    }
}
