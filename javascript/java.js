function checkSelection() {
    var Book = document.getElementById("Book").value;
    var numberOfDays = document.getElementById("numberOfDays").value;
  
    if (Book === "Luxury" && numberOfDays === "5") {
      alert("Congratulation you get one more night for free");
    }
    else{
        alert("The room is booked successfully");
    }
   
  }
  function checkText() {
    var textInput = document.getElementById("textInput").value;
  
    if (textInput === "") {
      alert("Text is empty. Please enter your answer.");
    }
    else{
        alert("Thanks for choosing us");
    }
  }
  
  
  
  
  
  