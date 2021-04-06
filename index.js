var rls = require('readline-sync');
const chalk = require('chalk');
//console.log(chalk.blue('Hello world!'));

var score = 0;
  
  console.log(chalk.red("********************"));
      console.log(chalk.blue.bgGreen.bold("Human Body Quiz!!"));

 var username = rls.question(chalk.yellow.underline("Please enter your name? ")); 

 var welcome = chalk.blue("Welcome ") + chalk.green.bold.underline(username) + chalk.blue(" to the quiz..") ;

 console.log(welcome);

if(rls.keyInYN(chalk.underline("Press Y/N to continue or exit: ")))
{
   function humanbody(opt , quest, answer)
 {
   console.log("\n");
   console.log(chalk.rgb(124,200,140).bold(quest));
   var index = rls.keyInSelect(opt, " ");
   index++;
   // console.log(index_strongmuscle);
   

   if(index == answer)
   {
     console.log(chalk.rgb(123, 145, 67)("Correct") + chalk.rgb(223, 145, 67)("!"));
     score++;
   }else
   {
     console.log(chalk.rgb(244, 45, 47)("Wrong") + chalk.rgb(253, 15, 7)("!"));

   }
   console.log(chalk.bold("Score : ") + chalk.green.bold(score));
   console.log(chalk.grey.underline.bold("------------"));

 }

  
 


 var questionnaire = [
   {
     options : ["Tongue", "Arm" , "Thigh" , "Neck"],
     quest : "Which is the strongest muscle in the human body? ",
     answer : 1
   },

    {
     options : ["36", "95" , "122" , "72"],
     quest : "How many times heart beats per minute? ",
     answer : 4
   },

    {
     options : ["Yes", "No" ],
     quest : "Can you sneeze with eyes open? ",
     answer : 2
   },

    {
     options : ["2", "3" , "4" , "6"],
     quest : "How many canine teeth human have? ",
     answer : 3
   },

    {
     options : ["A", "B" , "AB" , "O"],
     quest : "Which is the universal donor blood group? ",
     answer : 4
   },

    {
     options : ["8", "6" , "9" , "7"],
     quest : "How much sleep is needed by human body? ",
     answer : 1
   },

    {
     options : ["21000", "10000" , "20000" , "18000"],
     quest : "Highest decibel range human ear can hear? ",
     answer : 3
   }

   

 ];

  for(var i = 0; i<questionnaire.length; i++)
  {
    humanbody(questionnaire[i].options, questionnaire[i].quest , questionnaire[i].answer);
  }

  console.log(chalk.blue.bold("Your final score: ") + chalk.green.bold.underline(score) + chalk.green.bold.underline("/7"));
}
else{
 console.log(chalk.red.bold("Exited"));
}

 

 //console.log(superman.color);
// console.log(batman.color);
// console.log(superman.power > batman.power);