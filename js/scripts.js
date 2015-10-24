
// POST /oauth/token
// Host: https://apisandbox.moxtra.com
// Content-Type: application/x-www-form-urlencoded

// client_id=INSERT_CLIENT_ID&
// client_secret=INSERT_CLIENT_SECRET&
// grant_type=http://www.moxtra.com/auth_uniqueid&
// uniqueid=INSERT_UNIQUE_USER_IDENTIFIER&
// timestamp=TIMESTAMP&
// firstname=INSERT_FIRST_NAME&
// lastname=INSERT_LAST_NAME

// //function create_user(){
	// var client_id = "jVvRPHlk5nQ";
 //    var client_secret = "h4HCfKL9mqc";
 //    var timestamp = new Date().getTime();
 //    var unique_id = "unique_user_id"; //Unique ID of how user is identified in your system
    
 //    var hash = CryptoJS.HmacSHA256(client_id + unique_id + timestamp, client_secret);
 //    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
 //    var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
// //}
	
// function get_token() {
//         var init_options = {
//             uniqueid: unique_id,
//             firstname: "John",
//             lastname: "Doe",
//             timestamp: timestamp,
//             signature: signature,
//             get_accesstoken: function(result) {
//                 console.log("access_token: " + result.access_token + " expires in: " + result.expires_in);
//                 start_meet(result.access_token);
//             },
//             error: function(result) {
//                 console.log("error code: " + result.error_code + " message: " + result.error_message);
//             }
//         };
//         Moxtra.setup(init_options);
//     }

// function start_meet(access_token) {
//     var meet_options = {
//         iframe: true, //To open the meet in the same window within an iFrame.
//         // tab: true, //To open the meet in a new browser tab, N/A if iframe option is set to true.
//         tagid4iframe: "meet-container",
//         iframewidth: "1000px",
//         iframeheight: "750px",
//         extension: { 
//             "show_dialogs": { "meet_invite": true } 
//         },
//         access_token: access_token,
//         start_meet: function(event) {
//             console.log("Meet Started - session_id: "+event.session_id+"session_key: "+event.session_key);
//             //Your application server can upload files to meet using the session_id and session_key
//         },
//         error: function(event) {
//             console.log("error code: " + event.error_code + " message: " + event.error_message);
//         },
//         end_meet: function(event) {
//             console.log("Meet Ended");
//         }
//     };
//     Moxtra.meet(meet_options);
// }

function init() {
    var options = {
        mode: "sandbox", //for production environment change to "production"
        client_id: jVvRPHlk5nQ,
        access_token: ACCESS_TOKEN, //valid access token from user authentication
        invalid_token: function(event) {
            alert("Access Token expired for session id: " + event.session_id);
        }
    };

    Moxtra.init(options);
}

init();