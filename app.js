// JavaScript code for the website notifications
function notifyNewSignUpMessage() {
    // Code to notify you of new sign up messages
    console.log("New sign up message received!");
  }
  
  // Call the function to start receiving notifications
  notifyNewSignUpMessage();


  const questions = document.querySelectorAll(".faq .question");
questions.forEach(function(question) {
  question.addEventListener("click", function() {
    this.classList.toggle("open");
  });
});