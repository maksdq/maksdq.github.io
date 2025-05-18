const disp = document.getElementById('display');
// function append(chsr){disp.value += chsr;}
function clearDisplay(){disp.value = '';}
function calculate(){disp.value = eval(disp.value);}
function append(char){

   if(char == '+'){
      return;
   }
   disp.value += char;
}