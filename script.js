//  NAVbar logic
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const menu = document.getElementById("menu");
  const closeButton = document.getElementById("close-button");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("active");
 });

});


// FAQ logic

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
