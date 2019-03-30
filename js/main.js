var myTextArea = document.getElementsByTagName('container')[0];
var myTextLength = myTextArea.value.length
var myTextWidth = parseInt(window.getComputedStyle(myTextArea).width);
var myTextMinLength = 20;
var myTextMaxWidth = ((parseInt(window.getComputedStyle(document.body).width) / 100) * 80);

function checkTextLength() {
    myTextLength = myTextArea.value.length;
    
    if ((myTextLength > myTextMinLength) && (myTextWidth < (myTextMaxWidth))) {
            myTextWidth += 8;
        }
    
    myTextArea.style.height = myTextWidth + 'px';
}

myTextArea.addEventListener('keypress', checkTextLength, false);