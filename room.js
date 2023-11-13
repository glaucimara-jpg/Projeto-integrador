
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();






var firebaseConfig = {
  apiKey: "AIzaSyAZ1v_iPf3X_mTy7UFhb2V9fX5wpVt4eCc",
  authDomain: "projeto-integrador-b305d.firebaseapp.com",
  databaseURL: "https://projeto-integrador-b305d-default-rtdb.firebaseio.com",
  projectId: "projeto-integrador-b305d",
  storageBucket: "projeto-integrador-b305d.appspot.com",
  messagingSenderId: "592762118029",
  appId: "1:592762118029:web:08d1160865c4dd1407a7c4"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
	user_mail = localStorage.getItem("user_mail");

  document.getElementById("frase").innerHTML = "BEM-VINDO " + user_name + "!";


  var SpeechRecognition = window.webkitSpeechRecognition;
  
  var recognition = new SpeechRecognition();
  
  var texto = document.getElementById("texto"); 
  
  function start()
  {
      texto.innerHTML = ""; 
      recognition.start();
  } 
   
  recognition.onresult = function(event) {
  
   console.log(event); 
  
  var Content = event.results[0][0].transcript;
  
      texto.innerHTML = Content;
      console.log(Content);
        if(Content =="tire minha selfie")
        {
          console.log("tirando selfie --- ");
          speak();
        }
  }
  function send()
{
  texto= document.getElementById("texto").value;
  firebase.database().ref(user_name).push({
    name:user_name,
    message:texto,
    Email:user_mail
   });

  document.getElementById("texto").value = "";
}
  
  
  
function getData() { firebase.database().ref("/"+user_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         Email = message_data['Email'];
         
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }




function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("user_mail");
window.location.replace("fim.html");
}