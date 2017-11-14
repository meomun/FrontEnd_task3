document.getElementById("myBtn").addEventListener("click", function(e){
     document.getElementById("error").innerHTML = '';
     var done = 0;
    
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
        document.getElementById("error").innerHTML = "Firstname must be filled <br>";
        done--;
    }
    
    var x = document.forms["myForm"]["lastname"].value;
    if (x == "") {
        document.getElementById("error").innerHTML += "Lastname must be filled<br>";
        done--;
    }
    
    var email = document.getElementById('email');
    var filter = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (email.value == "") {      
        document.getElementById("error").innerHTML += "Email must be filled <br>";
        done--;
    } else if (!filter.test(email.value)){           
        document.getElementById("error").innerHTML += "Email must be in valid form <br>";
        email.focus;
        done--;
    }
    
    var phone = document.getElementById('phone');
    var filter = /^[+]358\d{9}$/;
    if (!phone.value == "" && !filter.test(phone.value)){           
        document.getElementById("error").innerHTML += "Phone number must be +358 XX XXXXXXX <br>";
        phone.focus;
        done--;
    }
    
    var PO = document.getElementById('PO');
    var numbers = /^\d{5}$/;  
    if(!PO.value == "" && !PO.value.match(numbers)){
        document.getElementById("error").innerHTML += "Postal code should have 5 numbers <br>";
        done--;
    } 
    
    var pass = document.getElementById('pass');
    if(pass.value == ""){
        document.getElementById("error").innerHTML += "Password should not be empty <br>";
        done--;
    }
    
    var form = document.querySelector('form');
    
    if (done === 0) {
        form.submit();  
    } else {
        e.preventDefault();
    }    
})
    
                                              