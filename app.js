var numberInput = document.querySelector(".number_input");
var symbolInput = document.querySelector(".symbol_input");

var sequenceDisplay = document.querySelector(".sequence_display");
var sequenceAnswer = document.querySelector(".sequence_answer");

var sequenceForm = document.querySelector(".sequence_form_group");
var termInput =document.querySelector(".term_input");
var differenceInput = document.querySelector(".difference_input");

var sequenceButton = document.querySelector(".sequence_button");

var numbers = [];


const GetCommonDifferenceResults = (firstTerm,commonDifferenceValue,symbol) =>{
  console.log(symbol);
  console.log(firstTerm,commonDifferenceValue,symbol);
  var result = eval(firstTerm + symbol + commonDifferenceValue);
  return result;
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
  var nthTerm = parseInt(termInput.value);
  var firstTerm = parseInt(numberInput.value);
  var commonDifferenceValue = parseInt(differenceInput.value);
  var symbol = symbolInput.value;
  var commonDifferenceResultsValue = GetCommonDifferenceResults(firstTerm,commonDifferenceValue,symbol);
  var answer = firstTerm + (nthTerm - 1) * commonDifferenceResultsValue;

  var answerArr = [firstTerm];

  for(var i = 0; i <= nthTerm; i ++){

    var commonDifferenceResultsValue = GetCommonDifferenceResults(answerArr[i],commonDifferenceValue,symbol);
    answerArr.push(commonDifferenceResultsValue);
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
