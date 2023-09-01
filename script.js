//to be returned values from the form:
let customerName='';
let requiredSkates='';
let time=''; //in case open -1 else minutes eg 60 ,30
let mortage=''; //'phone'or'id'or'else'





function openForm() {
    document.getElementById("nameForm").style.display = "block";
}
function closeForm(ID) {
    document.getElementById(ID).style.display = "none";
}


function navigateToNextPage(currentFormId, nextFormId) {
    if (currentFormId == "nameForm") {
        
        if( document.getElementById("custName").value==''){
            return;
        }
        customerName = document.getElementById("custName").value
    }
    else if (currentFormId = "reqSkatesForm") {
        requiredSkates = document.getElementById("reqSkates").value
        if( document.getElementById("reqSkates").value==''){
            return;
        }
    }
    else if (currentFormId = "timeForm") {
        time = document.getElementById("time").value
        if( document.getElementById("time").value==''){
            return;
        }
    }
    else if (currentFormId = "mortageForm") {
        mortage = document.getElementById("mortage").value
        if( document.getElementById("mortage").value==''){
            return;
        }
    }
  var currentForm = document.getElementById(currentFormId);
  var nextForm = document.getElementById(nextFormId);
  var loadingContainer = currentForm.querySelector('.loading-container');

  // Show the loading symbol
  loadingContainer.style.display = 'block';

  // Disable the 'Next' button to prevent multiple clicks
  var nextButton = currentForm.querySelector('.btn');
  nextButton.disabled = true;

  // Simulate a delay or perform asynchronous operations
  setTimeout(function () {
    // Hide the loading symbol
    loadingContainer.style.display = 'none';

    // Enable the 'Next' button
    nextButton.disabled = false;

    // Close the current form and open the next form (if needed)
    currentForm.style.display = 'none';
    nextForm.style.display = 'block';
  }, 2000); // Adjust the delay time as needed
  
  }


