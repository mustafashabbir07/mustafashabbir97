var rls = require('readline-sync');

var score = 0;
 var username = rls.question("Please enter your name? "); 

 var welcome ="Welcome " + username + " to the mustafa quiz.." ;

 console.log(welcome);

if(rls.keyInYN("Press Y/N to continue or exit: "))
{
   function knowmequiz(quest, answer)
 {
   var userans = rls.question(quest);

   if(userans == answer)
   {
     console.log("you are right");
     score++;
   }else
   {
     console.log("you are wrong");

   }
   console.log("Score : " + score);
   console.log("------------");

 }

 var questionnaire = [
   {
     quest : "where mustafa lives? [Option: Indore | Pune | Mumbai]",
     answer : "Indore"

   },

   {
     quest : "Profession? [Option: Software developer | Business owner | Chartered Accountant]",
     answer : "software developer"

   },
   {
     quest : "Where I work?  [Option: Indore | Pune | Mumbai]",
     answer : "Pune"

   },
   {
     quest : "Favorite food? [Option: Chicken | Fish | Veggies] ",
     answer : "Chicken"

   },

 ];

  for(var i = 0; i<questionnaire.length; i++)
  {
    knowmequiz(questionnaire[i].quest , questionnaire[i].answer);
  }

  console.log("Your final score: " + score);
}
else{
 console.log("Exited");
}

 

 //console.log(superman.color);
// console.log(batman.color);
// console.log(superman.power > batman.power);