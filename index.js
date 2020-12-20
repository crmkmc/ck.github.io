// $( document ).ready(function() {
//     console.log( "ready!" );
// });

$( document ).ready(function() {
    var typing = new Typing({
        source: document.getElementById('source'),
        output: document.getElementById('output'),
        delay: 120,
        done: function() {
	      console.log(this);
	      console.log('done')
	    }
    });
    
    typing.start();
});

