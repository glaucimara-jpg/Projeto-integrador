function addUser() {

    user_name = document.getElementById("user_name").value;
    user_mail = document.getElementById("user_mail").value;
  
    
    localStorage.setItem("user_name", user_name);
    localStorage.setItem("user_mail", user_mail);
    
    
  
    
      window.location = "room.html";
  }
  
  var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("texto"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speakData = "Pressione o botão verde diga o seu nome e o seu email , faça a sua reclamação ou o seu elogio e logo após pressione o botão vermelho para enviar";

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

  

    

    window.location.replace("room.html");
}

 
  
 




