function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value; 
    var email=document.myform.email.value;  
    var Snumber=document.myform.Snumber.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if (email==null || email==""){  
      alert("emial can't be blank");  
      return false;  
    }
    if (Snumber==null || Snumber==""){  
      alert("student number can't be blank");  
      return false;  
    }
    if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    } 