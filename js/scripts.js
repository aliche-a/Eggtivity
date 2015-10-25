        //   function getAccessToken(unique_id) {
        //         var timestamp = new Date().getTime();
        //         $.ajax({
        //             type: 'POST',
        //             url: 'https://apisandbox.moxtra.com/oauth/token',
        //             data: 'client_id=jVvRPHlk5nQ&client_secret=h4HCfKL9mqc&grant_type=http://www.moxtra.com/auth_uniqueid&uniqueid='+unique_id+'&timestamp='+timestamp+'&firstname=John&lastname=Doe',
        //             contentType: 'application/x-www-form-urlencoded',
        //             success: function(data){
        //                 response = JSON.stringify(data);
        //                 var obj = JSON.parse(response);
        //                 var access_t = (obj.access_token);
        //                 console.log(access_t);
        //                 // console.log(response);
        //                 return access_t;
        //             }
        //         });
        //     }
            
        //     access_token=getAccessToken('u001');//'4zMgAAAVCaymINAACowFViYlplVE52OWZURjJlZDZick51dGYzIAAAAANUdHNDeWFmTmxuUERxOTVEZUxSV1BSQmpWdlJQSGxrNW5R';//getAccessToken("u001");
        //     console.log(access_token);
        //     if (access_token) {
        //         // Initialize Moxtra SDK Object
        //         var options = {
        //             mode: "production", 
        //             client_id: "jVvRPHlk5nQ", //
        //             access_token: access_token,
        //             invalid_token: function(event) {
        //                 //Triggered when the access token is expired or invalid
        //                 alert("Access Token expired for session id: " + event.session_id);
        //             }
        //         };
        //         Moxtra.init(options);
        //     }
        //     else {
        //         //Authenticate and get access token for the user before proceeding further
        //         console.log ("No access token found");
        //     }  
       
        // function start_chat () {            
        //     var chat_options = {
        //         //unique id of the users who will be part of the chat. These users should already exist in Moxtra.
        //         //unique_id: "unique_user_id_2,unique_user_id_3",  
        //         iframe: true,
        //         //ID of the HTML tag within which the chat window will show up. Refer https://developer.grouphour.com/moxo/docs-js-sdk/#conversation
        //         tagid4iframe: "chat",
        //         iframewidth: "100%",
        //         iframeheight: "100%",                
        //         //autostart_meet: true,
        //         //autostart_note: true,
        //         extension: { "show_dialogs": { "member_invite": true } },
        //         start_chat: function(event) {
        //             console.log("Chat started binder ID: " + event.binder_id);
        //             //Your application server can upload files to draw using the binder_id and access_token
        //         },
        //         start_meet: function(event) {
        //             console.log("Meet started session key: " + event.session_key + " session id: " + event.session_id);
        //         },
        //         end_meet: function(event) {
        //             console.log("Meet end event");
        //         },
        //         invite_member: function(event) {
        //             console.log("Invite member into binder Id: " + event.binder_id);
        //         },
        //         request_note: function(event) {
        //             console.log("Note start request");
        //         },
        //         error: function(event) {
        //             console.log("Chat error code: " + event.error_code + " error message: " + event.error_message);
        //         }
        //     };            
        //     Moxtra.chat(chat_options);
        // }

        // function start_timeline(){
        //     var options = {
        //         iframe: true,
        //         tagid4iframe: "timeline",
        //         iframewidth: "350px",
        //         iframeheight: "650px",
        //         start_timeline: function(event) {
        //             alert("TimelineView started session Id: " + event.session_id);
        //         },
        //         request_view_binder: function(event) {
        //             alert("Request to view binder Id " + event.binder_id);
        //         },
        //         error: function(event) {
        //             alert("TimelineView error code: " + event.error_code + " error message: " + event.error_message);
        //         }
        //     };

        //     Moxtra.timelineView(options);
        //     //start_timeline();
        // }
        // //start_timeline(); 

        //var dataRef = new Firebase('https://blinding-heat-908.firebaseio.com/TName');
        var currDate;
        var i = 0;
        window.onload = function(){
            $('#addToList').hide();
            //$('#pickDate').hide();
            

            $('#addTaskButton').click(function(){
                console.log('add button clicked');
                var item = document.getElementById('listItem').value;
                console.log(item);
                makeCheckListItemStr(item);
                

                //adding item to firebase
                var dateDB = new Firebase('https://blinding-heat-908.firebaseio.com/TName/Dates/' + currDate);
                //var dateTab = dataRef.child('TName').child('Dates').child();
                //console.log(dateTab.value('Person 1'));
               

                dateDB.push({'name': item, 'done': 'no'});
                //console.log('should be pushed');
            });

            // $('.chck').click(function(){
            //     console.log('got checked');
            //     var DB = new Firebase('https://blinding-heat-908.firebaseio.com/TName/Dates/' + currDate);
            //     DB.on('value', function(snapshot){
            //         var data = snapshot.val();
            //         console.log($(this).value);
            //         DB.orderBy('name').equalTo($(this).value).on('value', function(snapshot){
            //             console.log(snapshot);
            //         });
            //     });
            // });
            $('.clck').on('click', function(){
                console.log('asldf');
            });


            
        }

       

            function makeCheckListItem(obj){
                //console.log(obj.name);
                var label = document.createElement('label');
                label.htmlFor = "id";
                label.appendChild(document.createTextNode(obj.name));
                var taskItem = document.createElement('input');
                taskItem.type = 'checkbox';
                taskItem.setAttribute('class', 'chck');
                i++;
                var br = document.createElement('br');

                var str = '';
                if(obj.done == 'yes'){
                    console.log('should be checked');
                    str = '<input type="checkbox" onchange="check()" checked><label for="id">' + obj.name + '</label><br>';
                }
                else
                    str = '<input type="checkbox" onchange="check()"><label for="id">' + obj.name + '</label><br>';
                //console.log(str);
                
                // document.getElementById('list').appendChild(taskItem);
                // document.getElementById('list').appendChild(label);
                // document.getElementById('list').appendChild(br);
                
                $('#list').append(str);

            }

            function check(){
                //console.log('check function');
                    
                    var DB = new Firebase('https://blinding-heat-908.firebaseio.com/TName/Dates/' + currDate);
                    //console.log('made database');
                    DB.once('value', function(snapshot){
                        snapshot.forEach(function(childSnapshot){
                            //console.log(childSnapshot);
                            if(childSnapshot.val().name == 'task1'){
                                DB.child(childSnapshot.key()).set({name: 'task1',done: 'yes'});
                                //console.log(childSnapshot.val().done);
                                //childSnapshot.child('done').set('yes');
                                //childSnapshot.set({done: 'yes'});
                                //console.log(childSnapshot.child('done'));
                            }
                            
                        });
                        console.log(snapshot);
                    });
                    //console.log('checked');
                
            }

            function makeCheckListItemStr(name){
                var taskItem = document.createElement("input");
                taskItem.type = "checkbox";
                //taskItem.checked = "false";
                var label = document.createElement('label');
                label.htmlFor = "id";
                label.appendChild(document.createTextNode(name));
                var br = document.createElement('br');

                //adding item to front end
                var str = '<input type="checkbox" onchange="check()"><label for="id">' + obj.name + '</label><br>';
                $('#list').append(str);
                // document.getElementById('list').appendChild(taskItem);
                // document.getElementById('list').appendChild(label);
                // document.getElementById('list').appendChild(br);
            }

            function showList(date){
                currDate = date;
                $('#addToList').show();
                $('#pickDate').hide();
                console.log('showing list of ' + date);
                document.getElementById('list').innerHTML = '';
                var dateDB = new Firebase('https://blinding-heat-908.firebaseio.com/TName/Dates/' + date);
                dateDB.once('value', function(snapshot){
                    snapshot.forEach(function(child){
                        console.log('child val' + child.val());
                        //console.log(makeCheckListItem(child.val()));
                        if(child.val() != -1){
                            //console.log('hi');
                            makeCheckListItem(child.val());
                        }
                    });
                });

                // $('#list').click(function(){
                //     console.log('oasdmf');
                // });
            }
        //}
        
     