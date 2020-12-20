$( document ).ready(function() {
    var typing = new Typing({
        source: document.getElementById('source'),
        output: document.getElementById('output'),
        delay: 120
    });
    
    typing.start();
});

