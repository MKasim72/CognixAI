let speakBtn = document.getElementById('btn')
let gif = document.getElementById('gif')
    // // speakBtn.addEventListener('click', function() {
        
    // // })
const speak = (text) =>{
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.lang = 'hi-IN'
    text_speak.rate = 1.0
    text_speak.pitch = 1.0
    text_speak.volume = 1.0
    window.speechSynthesis.speak(text_speak)
}

const wishMe = () =>{
    let date = new Date()
    let hour = date.getHours()
    if(hour>=0 && hour < 12){
        speak('Good Morning Kasim I am Cognix Your personal AI')
    }
    else if(hour>=12 && hour<16){
        speak('Good Afternoon Kasim I am Cognix Your personal AI')
    }
    else{
        speak('Good Evening Kasim I am Cognix Your personal AI Welcomes You')
    }
}
window.addEventListener('load',()=>{
    wishMe()
    // speak("hello")
    // console.log("hello")
})

// speakBtn.addEventListener('click',()=>{
//     speak('Hello Kasim')
// })

let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (e) => {
    let transcript = e.results[e.resultIndex][0].transcript
    // speakBtn.innerHTML = transcript
    speakBtn.style.display = 'none'
    gif.style.display = 'inline-block'
    console.log(transcript)
    takeCommand(transcript.toLowerCase())
};

const takeCommand = (message) =>{
    speakBtn.style.display = 'flex'
    gif.style.display = 'none'
    // speakBtn.innerText = ''


    if(message.includes("hello")){
        speak("Hello Sir , How Can I help you ? ")
    }
    
    else if(message.includes("who are you") || message.includes('kon ho tum')){
        speak("Hello Sir , I am Cognix made by Developer Mohammed Kasim")
    }
    
    else if(message.includes("open youtube") || message.includes('kon ho tum')){
        speak("Opening Youtube")
        window.location.href="https://www.youtube.com" ||  window.open("https://www..com")
    }

    else if(message.includes("open chrome") || message.includes('kon ho tum')){
        speak("Opening Youtube")
        window.location.href="https://www.google.com"
    }

    else if(message.includes("open calculator") || message.includes('kon ho tum')){
        speak("Opening Calculator")
        window.location.href="calculator://"
    }

    else if(message.includes("time") || message.includes('kon ho tum')){
        let time = new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else{
        speak(`This is what I found regarding ${message}`)
        window.location.href = `https://www.google.com/search?q=${message}`
    }
}

speakBtn.addEventListener('click', () => {
    speakBtn.style.display = 'none'
    gif.style.display = 'inline-block'
    recognition.start();
});

