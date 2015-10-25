document.addEventListener('DOMContentLoaded', function() {
  var thebutton = document.getElementById('login-button');

    // onClick's logic below:
    thebutton.addEventListener('click', function() {
      var teamInput = document.getElementById("team").value;
      var unInput = document.getElementById("username").value;
    console.log("logggingggg in");

      createUser({team: teamInput, username: unInput});
    });
  });

//comment
document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.getElementById('reset');
    // onClick's logic below:
    resetButton.addEventListener('click', function() {

    var resetRef = new Firebase("https://blinding-heat-908.firebaseio.com/TName");
    resetRef.child("Dates").remove();
  });
});
