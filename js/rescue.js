var sentences = ['da Rescue Team', 
                 '==============', 
                 ' ', 
                 '+ 4 developers', 
                 '+ 200.000 lines of code', 
                 '+ 0% coverage', 
                 '+ dozens of defects', 
                 '+ tons of smells'];

var realisticTypewriter = new RealisticTypewriter();
var typeWriterElement = document.getElementById("typewriter");

function prompt(element, text) {
    var span = document.createElement("span");
    span.innerHTML = text;
    element.appendChild(span);
}

function writeLine(indexLine){
    realisticTypewriter.type(sentences[indexLine], typeWriterElement, function(){
        if(indexLine < sentences.length -1){
            indexLine++;
            prompt(typeWriterElement, "<br/>");
            writeLine(indexLine);
       }
   });
}

function start() {
    var indexLine = 0;
    writeLine(indexLine);    
}

var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        start();
        clearInterval(readyStateCheckInterval);
    }
}, 10);