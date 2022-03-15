const getSleepHours = day => {
  if (day === 'Monday'){
     return 8;
   }else if (day === 'Tuesday'){
     return 5;
   }else if (day === 'Wednesday'){
     return 6;
   }else if (day === 'Thursday'){
     return 7;
   }else if (day === 'Friday'){
     return 7;
   }else if (day === 'Saturday'){
     return 5;
   }else if (day === 'Sunday'){
     return 6;
   }else{
     return 'Try again';
   }
 };
 //function testing
 //console.log(getSleepHours('tuesday'));
 //console.log(getSleepHours('thursday'));
 
 //total hours of sleep
 const getActualSleepHours = ()=> 
 getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
 
 //console.log(getActualSleepHours());
 
 //ideal sleeping hours
 const getIdealSleepHours = ()=> {
 let idealHours = 8;
 return idealHours * 7;
 };
 //console.log(getIdealSleepHours());
 
 //calculate sleep dept
 const calculateSleepDept= () => {
 const actualSleepHours = getActualSleepHours();
 const idealSleepHours = getIdealSleepHours();
 if (actualSleepHours === idealSleepHours) {
   console.log('perfect amount of sleep');
 } else if (actualSleepHours > idealSleepHours) {
   console.log('You got',  + (idealSleepHours - actualSleepHours) + ' ' + 'hours more of sleep than needed');
 } else {
   console.log('You got', + (idealSleepHours - actualSleepHours) + ' ' +  'hours less than the sleep you needed');
 }
 };
 calculateSleepDept();
 
 