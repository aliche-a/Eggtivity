Firebase.enableLogging(true);
var ref = new Firebase("https://blinding-heat-908.firebaseio.com/");
var loggedIn = false;
function createUser(teamNameObject)
{
        console.log("Successfully created user account with1");

  document.getElementById("error").innerHTML = "";
          console.log("Successfully created user ");

  ref.createUser(teamNameObject, function(/*error, userData*/) {
   /* if (error) {
      switch (error.code) {
        case "USERNAME_TAKEN":
          document.getElementById("error").innerHTML = "You must enter a different username.";
          break;
        default:
          document.getElementById("error").innerHTML = "We apologize, something unexpected has occured.";
          console.log("Error creating user:", error);
      }
    } else { */ 
      console.log("Successfully created user account with");

      authWithUsername(teamNameObject);
    //} 
  });
}

var currName;
function authWithUsername(teamNameObject){
  document.getElementById("error").innerHTML = "";
  ref.authWithPassword(teamNameObject, function(error, authData) {
    if (error) {
     document.getElementById("error").innerHTML = "Invalid Username.";
   } else {
    console.log("Log in successful:", authData);
    //var html = '<p> You have logged in successfully as ' + authData.password.email + '</p>';
    document.getElementById("form").innerHTML= html;
    var key = document.getElementById('username').valuel
    var userFB = ref.child("TName/Members");
    var data = snapshot.val();
    if(data.TName.Members.Name1 == "simplelogin: -1"){
      console.log("Name1 is updated");
      userFB.update({
        "Name1": key
      })
    }
    else{
      console.log("Name2 is updated");
      userFb.update({
        "Name2": key
      })
    }
   /* key = authData.uid;
    assignPlayerNumber(key);
    loggedIn = true;*/
  }
});
}
