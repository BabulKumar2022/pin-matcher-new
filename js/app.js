function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    } else{
        // console.log('got 3 digit and calling again', pin)
        return getPin()
    } 
}

function generatePin(){
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin;

}

document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText;
   const calc = document.getElementById('typed-number');
   if(isNaN(number)){
    if(number == 'C'){
        calc.value = '';
}
   }else{
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
     calc.value = newCalc;
   }

})


function verifyPin(){
  const pin =  document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const success = document.getElementById('notify-success ');
    const failError =document.getElementById('notify-failed');
    if(pin == typedNumber){
        // console.log('match')
      
        success.style.display = 'block';
        failError.style.display = 'none';
      
    }else{
        // console.log('not match')
    
        failError.style.display = 'block';
        success.style.display = 'none';
    }
    // console.log('click')
}