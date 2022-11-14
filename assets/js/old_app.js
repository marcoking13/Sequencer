var numberInput;
var symbolInput;

var sequenceDisplay = document.querySelector(".sequence_display");
var sequenceAnswer = document.querySelector(".sequence_answer");

var termInput;
var differenceInput;

var form_row = document.querySelector(".form_row");
var sequenceButton;

var findNthTerm = document.querySelector(".find_nth_term");
var findDifference = document.querySelector(".find_difference")

var numbers = [];

var difference_form = {
  array_of_numbers:[],
  array_of_numbers_element:[]
}

var engine = {
  isNthTermOn:true,
  isDifferenceOn:false,
  isFindXOn:false
}

const GetCommonDifferenceResults = (firstTerm,commonDifferenceValue,symbol) =>{

  var result = eval(firstTerm + symbol + commonDifferenceValue);
  return result;

}

const IsCommonDifference = (differences,sign) =>{

  var first_difference = differences[0];
  var has_common_difference = {
    common_diff:null,
    sign:null
  };

  for(var i = 1; i < differences.length; i++){

    if(first_difference == differences[i]){
      has_common_difference.common_diff = differences[i];
      has_common_difference.sign = sign;
    }else{
      has_common_difference.common_diff = null;
      has_common_difference.sign = null
      break;
    }

  }

  return has_common_difference;

}

const FindTheCommonDifferenceAnswer = (numbers)=>{

  var differences = {
    multiplied:[],
    add:[],
    subtract:[],
    divide:[]
  }

  var eval = [];

  if(numbers.length > 0){

    for(var i = 0; i<numbers.length -1 ;i++){

          var prevNum = parseFloat(numbers[i]);
          var counter = i + 1;

          var nextNum = parseFloat(numbers[counter])

          var addDifference = prevNum - nextNum;
          var subDifference = prevNum + nextNum;
          var multipliedDifference = nextNum  / prevNum;
          var dividedDifference = prevNum / nextNum;

          differences.add.push(addDifference);
          differences.subtract.push(subDifference);
          differences.multiplied.push(multipliedDifference);
          differences.divide.push(dividedDifference);


    }

  }

  var common_add_difference = IsCommonDifference(differences.add,"+")
  var common_sub_difference = IsCommonDifference(differences.subtract,"-")
  var common_divide_difference = IsCommonDifference(differences.divide,"/")
  var common_multiply_difference = IsCommonDifference(differences.multiplied,"*")
  var answer_element = document.querySelector('.sequence_answer');

  if(common_add_difference.common_diff){
    answer_element.innerHTML = "Common Difference: " + common_add_difference.sign + " "+Math.abs(common_add_difference.common_diff);
    return;
  }
  if(common_sub_difference.common_diff){
    answer_element.innerHTML = "Common Difference: " + common_sub_difference.sign + " "+Math.abs(common_sub_difference.common_diff);
    return;
  }
  if(common_divide_difference.common_diff && !common_multiply_difference.common_diff){
    answer_element.innerHTML = "Common Difference: " + common_divide_difference.sign + " "+Math.abs(common_divide_difference.common_diff);
    return;
  }
  if(common_multiply_difference.common_diff){
    answer_element.innerHTML = "Common Difference: " + common_multiply_difference.sign + " "+Math.abs(common_multiply_difference.common_diff);
    return;
  }else{
    alert("No Match Found");
  }

}

const DisplayNumbersLoop = (numbers) => {

  var display = "";
  var linebreak= null;

  for (var i = 0; i < numbers.length; i++){

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

  if(engine.isNthTermOn){
    FindNthTerm();
  }else if(engine.isDifferenceOn && difference_form.array_of_numbers.length > 0){
    FindTheCommonDifferenceAnswer(difference_form.array_of_numbers);
  }

}


  const RenderFormDifference = () => {

    const html = `  <form>
          <div class="form-group sequence_form_group">
              <input class="number_input_difference white goldman width-100 form-control sequence_form"value =9 placeholder="Enter Numbers (Seperate with comma)"/>
              <button type = "submit" class="width-100 btn sequence_button">Submit</button>
          </div>
      </form>`

      form_row.innerHTML = html;
      sequenceForm = document.querySelector(".sequence_form_group");
      sequenceButton = document.querySelector(".sequence_button");

      difference_form.array_of_numbers_element = document.querySelector(".number_input_difference");

      difference_form.array_of_numbers_element.addEventListener("change",(e)=>{
         difference_form.array_of_numbers = e.target.value.split(",");
         DisplayNumbers(difference_form.array_of_numbers);
      });

      sequenceButton.addEventListener("click",(e)=>{
          if(difference_form.array_of_numbers.length > 3){
            Submit(e);
            DisplayNumbers(difference_form.array_of_numbers);
          }else{
            alert("Sequence must be more than 3 numbers")
          }
      })


  }


const DisplayNumbers = (numbers) =>{

  sequenceDisplay.innerText =DisplayNumbersLoop(numbers);

}

const SetNthTermFeature = () =>{
  if(engine.isNthTermOn == false){
    engine.isNthTermOn = true;
  }else{
      engine.isNthTermOn = true;
      engine.isDifferenceOn = false;
      engine.isFindXOn = false;
  }

  RenderForm();

}

const SetDifferenceFeature = () =>{
  if(engine.isDifferenceOn == false){
    engine.isDifferenceOn = true;
  }else{
      engine.isNthTermOn = false;
      engine.isDifferenceOn = true;
      engine.isFindXOn = false;
  }

  RenderForm();

}

const RenderForm =()=>{
  if(engine.isNthTermOn){
    RenderFormNthTerm();
    return;
  }else if(engine.isDifferenceOn){
    RenderFormDifference();
    return;
  }

}

RenderForm();

findNthTerm.addEventListener('click', (e)=>{SetNthTermFeature()});
findDifference.addEventListener('click', (e)=>{SetDifferenceFeature()});
