var sequenceDisplay = document.querySelector(".sequence_display");
var sequenceAnswer = document.querySelector(".sequence_answer");
var sequenceForm;

var form_row = document.querySelector(".form_row");
var sequenceButton;

var numbers = [];

var engine = {
  isNthTermOn:true,
  isDifferenceOn:false,
  isFindXOn:false
}

const DisplayNumbersLoop = (numbers) => {

  var display = "";

  for (var i = 0; i < numbers.length; i++){

    if(i >= 6 || i >= numbers.length - 1){
      display += "...";
      break;
    }else {
      display += numbers[i].toString();
      if(i < numbers.length - 2){
        display+= ","
      }
    }
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

const DisplayNumbers = (numbers) =>{
  sequenceDisplay.innerText =DisplayNumbersLoop(numbers);
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

const SetNthTermFeature = () =>{

        engine.isNthTermOn = true;
        engine.isDifferenceOn = false;
        engine.isFindXOn = false;


    RenderForm();
    findNthTerm.classList.add("active");
    findDifference.classList.remove("active");



  }


  const SetDifferenceFeature = () =>{

        engine.isNthTermOn = false;
        engine.isDifferenceOn = true;
        engine.isFindXOn = false;
    

    RenderForm();

    findNthTerm.classList.remove("active");
    findDifference.classList.add("active");

  }


findDifference.classList.remove("active");
findNthTerm.classList.add("active");
RenderForm();



findNthTerm.addEventListener('click', (e)=>{SetNthTermFeature()});
findDifference.addEventListener('click', (e)=>{SetDifferenceFeature()});
