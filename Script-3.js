class User{

    constructor(user_name,password){
        this.user_name=user_name;
        this.password=password;
    }
    validate(){
        if(this.user_name=="" || this.user_name== null){
            alert("Username is empty");
         return false;
        }
  
        if(this.password=="" || this.password== null){
            alert("Password is empty");
         return false;
        }
        
    }
}
let user= new User();
user.validate();