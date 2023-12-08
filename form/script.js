class User{

    constructor(user_name){
        this.user_name=user_name;
        // this.password=password;
    }
    validate(){
        if(this.user_name=="" || this.user_name== null){
            alert("Username is empty");
         return false;
        }else{
            alert(this.user_name);
        }
  
        // if(this.password=="" || this.password== null){
        //     alert("Password is empty");
        //  return false;
        // }
        
    }
}
function display(){

var name=document.getElementById("name").value;
let user= new User(name);
user.validate();
}