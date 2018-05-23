let factDisplay = document.querySelector('#factdisplay');
let factText= document.querySelector('#facttext');
let numberInput=document.querySelector('#numinput');

numberInput.addEventListener('input', function(e){

let number = this.value;
console.log(number);

fetch('http://numbersapi.com/' + number)
    .then(response => response.text())
    .then(data => {

        if(number!=''){
            factDisplay.style.display='block';
            factText.style.color='red';
            factText.textContent = data;
        }
       
    })
    .catch(err => console.log(err));

});
