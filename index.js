document.addEventListener('DOMContentLoaded', function() {
  var thebutton = document.getElementById('login-button');

    // onClick's logic below:
    thebutton.addEventListener('click', function() {
      var teamInput = document.getElementById("team").value;
      var unInput = document.getElementById("username").value;

      createUser({team: teamInput, username: unInput});
    });
  });

//comment
/*document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.getElementById('reset');
    // onClick's logic below:
    resetButton.addEventListener('click', function() {

    var resetRef = new Firebase('https://vivid-heat-3174.firebaseio.com/Lobby');
    resetRef.update( {
      Person1: 'simplelogin:-1',
      Person2: 'simplelogin:-1',
      Person3: 'simplelogin:-1',
      Person4: 'simplelogin:-1',
    });
  });
});*/
