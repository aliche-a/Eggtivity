Firebase.enableLogging(true);
var ref = new Firebase("https://blinding-heat-908.firebaseio.com/");
var loggedIn = false;
function createUser(teamNameObject)
{
  document.getElementById("error").innerHTML = "";
  ref.createUser(teamNameObject, function(error, userData) {
    if (error) {
      switch (error.code) {
        case "USERNAME_TAKEN":
          document.getElementById("error").innerHTML = "You must enter a different username.";
          break;
        default:
          document.getElementById("error").innerHTML = "We apologize, something unexpected has occured.";
          console.log("Error creating user:", error);
      }
    } else {  
      console.log("Successfully created user account with uid:", userData.uid);
      authWithUsername(teamNameObject);
    } 
  });
}

function authWithUsername(teamNameObject)
{
  document.getElementById("error").innerHTML = "";
  ref.authWithPassword(teamNameObject, function(error, authData) {
    if (error) {
     document.getElementById("error").innerHTML = "Invalid Username.";
   } else {
    console.log("Log in successful:", authData);
    var html = '<p> You have logged in successfully as ' + authData.password.email + '</p>';
    document.getElementById("form").innerHTML= html;
   /* key = authData.uid;
    assignPlayerNumber(key);
    loggedIn = true;*/
  }
});
}
