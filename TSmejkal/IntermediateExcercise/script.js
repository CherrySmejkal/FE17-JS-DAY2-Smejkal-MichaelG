//Excercise 1

// let sentence = "i am a developer";
let sentence = "normally it works";

(function () {
  //charAt() equal to 0 Index
  console.log(sentence.charAt().toUpperCase() + sentence.slice(1));
})(sentence);

//Excercise 2

function averageGrade(math, physic, english){
            //parseInt() use for make sure variables are numbers
  let sum = parseInt(math) + parseInt(physic) + parseInt(english);
  console.log(`Sum: ${sum} \nAverage: ${sum / 3}`);
}

averageGrade("3",4,"5")

