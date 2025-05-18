function snow(size=10){
   let line = "";
   for(let i=0; i<size; i++){
      line = line + " *";
   }
   for(let i=0; i<size; i++){
      console.log(line);
   }

}
snow();

function getDays(mounth){
 if(mounth == 2) {return 28};
 if([4, 6, 9, 11].includes(mounth)){
   return 30
};
 return 31 
} 
''
console.log(getDays(2));
console.log(getDays(1));
//не забувай зачиняти всі вікна)))