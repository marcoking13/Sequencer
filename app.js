var numberInput = document.querySelector(".number_input");
var sequenceDisplay = document.querySelector(".sequence_display");
var sequenceAnswer = document.querySelector(".sequence_answer");

var sequenceForm = document.querySelector(".sequence_form_group");
var termInput =document.querySelector(".term_input");
var differenceInput = document.querySelector(".difference_input");

var sequenceButton = document.querySelector(".sequence_button");

var numbers = [];



const CommonDifference = (numbers)=> {
  var initalDifference = parseInt(numbers[1]) - parseInt(numbers[0]);
  var currentDifference;
  for (var i = 0; i < numbers.length; i++){
    if(i >= numbers.length - 1){
    return currentDifference;
    break;
    }
   currentDifference = parseInt(numbers[i + 1]) - parseInt(numbers[i]);
   console.log(currentDifference);
    if(currentDifference != initalDifference){
      return null;
      break;

    }

  }
  console.log(currentDifference);


}

const LoopNumbers = (numbers) => {
  var display = "";
  var linebreak= null;
  for (var i = 0; i < numbers.length; i++){
    console.log(i % 10);
    if(i % 10 == 0 && i > 0){
      linebreak = "\n";
    }else{
      linebreak = "";
    }
    display += linebreak + numbers[i].toString()+",";
  }
  return display;
}

const Submit = (e)=>{

  e.preventDefault();
  var numbers = numberInput.value.split(" ");
  var nthTerm = parseInt(termInput.value);
  var firstTerm = parseInt(numbers[0]);
  var commonDifference;
  if(differenceInput.value == ""){
   commonDifference = CommonDifference(numbers);
  }else{
    commonDifference =parseInt( differenceInput.value);
  }
  if(!commonDifference){
    sequenceDisplay.innerText = "No Match";
    sequenceAnswer.innerText = "N/A"
    return;
  }

  var answer = firstTerm + (nthTerm - 1) * commonDifference;
  console.log(answer);

  var answerArr = [firstTerm];

  for(var i = 0; i <= nthTerm; i ++){
      answerArr.push(answerArr[i] + commonDifference);
  }

  DisplayNumbers(answerArr);
  sequenceAnswer.innerText = nthTerm.toString() +"nth Term: "+ answerArr[nthTerm - 1];
}

sequenceForm.addEventListener('submit', (e)=>{Submit(e)});
sequenceButton.addEventListener('click', (e)=>{Submit(e)});



const DisplayNumbers = (numbers) =>{

  sequenceDisplay.innerText =LoopNumbers(numbers);

}

numberInput.addEventListener("change",(e)=>{
  var numbers = e.target.value.split(" ");
  DisplayNumbers(numbers);
})
