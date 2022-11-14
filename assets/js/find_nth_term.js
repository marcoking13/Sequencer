var findNthTerm = document.querySelector(".find_nth_term");
var termInput;
var differenceInput;
var numberInput;
var symbolInput;

const RenderFormNthTerm = () => {
  const html = `  <form>
        <div class="form-group sequence_form_group">
            <input class="number_input white goldman width-100 form-control sequence_form" placeholder="Enter First Number"/>
            <input class="white difference_input goldman width-100 form-control sequence_form"placeholder ="Common Difference(Only first term of sequence will be applied)"/>
            <input class="white symbol_input goldman width-100 form-control sequence_form"placeholder ="Common Difference Sign (*,+,**,/,-)"/>
            <input class="white term_input goldman width-100 form-control sequence_form"placeholder ="Enter Nth Term to Find"/>
            <button type = "submit" class="width-100 btn sequence_button">Submit</button>
        </div>
    </form>`

     form_row.innerHTML = html;
     sequenceButton = document.querySelector(".sequence_button");
     numberInput = document.querySelector(".number_input");
     symbolInput = document.querySelector(".symbol_input");
     sequenceForm = document.querySelector(".sequence_form_group");
     termInput = document.querySelector(".term_input");
     differenceInput = document.querySelector(".difference_input");
     form_row = document.querySelector(".form_row");

     sequenceForm.addEventListener('submit', (e)=>{Submit(e)});

     sequenceButton.addEventListener('click', (e)=>{Submit(e)});

     numberInput.addEventListener("change",(e)=>{
       var numbers = e.target.value.split(" ");
       DisplayNumbers(numbers);
     })


}

const FindNthTerm = () =>{
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
