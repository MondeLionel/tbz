var speechRecognition = SpeechRecognition || webkitSpeechRecognition;
var speechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var speechNav = ['back','forward', 'works','contact','terms']
var grammar = '#JSGF V1.0;grammer speechNav;public <nav> =' + speechNav;

var recognition = new SpeechRecognition () ; 
var speechRecognitionList = new SpeechGrammarList () ;
speechRecognitionList.addFromString (grammar , 1 ) ;

recognition.grammars = speechRecognitionList ; 
recognition.continuous = false ; 
recognition.lang = 'en-US'; 
recognition.interimResults = false ; 
recognition.maxAlternatives = 1 ;





recognition.onresult(function(event){
	console.log(event.results)
})