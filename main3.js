/*
const password = 'mexicue';
let numberGuess = 0;
let guessLimit = 3;
let error = false;
let response;

while(response !=password && !error){
    if(numberGuess<guessLimit){
    response= window.prompt('please enter the password');
    numberGuess++;
}else {
    error = true;
}
}
if (error){
    alert('too many entries')
}else{
    alert('you got it')
}
*/

const password = 'mexicue';
let response;

while(response != password){
    response= window.prompt('Please enter the password')
}
  alert('you go it')

  