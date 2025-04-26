let i =0 
let print = ()=>{
  return console.log('looping...');
  
}
let loop = ()=>{
  for (i = 0;i <10; i++){
    print()
    if (i === 5) {
      console.log('looping stopped at 5');
      break; // Exit the loop when i is 5
    }
  }
}
loop();