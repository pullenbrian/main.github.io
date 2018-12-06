$(document).ready(function(){
    var focusElem;
    var $encBtn = document.getElementById('encBtn');
    var $encInput = document.getElementById('encInput');
    var $encResult = document.getElementById('encResult');

    var $decBtn = document.getElementById('decBtn');
    var $decInput = document.getElementById('decInput');
    var $decResult = document.getElementById('decResult');

    $encBtn.addEventListener('click', function(){
        var encStr = caesercipher($encInput.value, true);
        $encResult.innerHTML = encStr;
    });
    $decBtn.addEventListener('click', function(){
        var decStr = caesercipher($decInput.value, false);
        $decResult.innerHTML = decStr;
    });
    $encInput.onFocus = function() {
        focusElem = 'encInput';
        console.log("enc focus");
    }
    $decInput.onFocus = function() {
        focusElem = 'decInput';
    }
//Use event listener to submit forms on click of enter button, keycode == 13
    document.addEventListener('keyup', function(event){
        console.log("keycode: " + event.which);
        console.log("event.keyCode : " + event.keyCode);
        console.log("focusElem: " + focusElem);
        if (event.keyCode == 13) {
            if (focusElem == 'encInput') {
                $encBtn.click();
            }
            if (focusElem == 'decInput') {
                $decBtn.click();
            }
        }
    });

});