const faqBtns = document.querySelectorAll(".faq-btn");
faqBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    let answerPanel = this.nextElementSibling;
    if (answerPanel.style.display === "block") {
      answerPanel.style.display = "none";

      faqBtns[i].children[1].textContent = "add";
    } else {
      answerPanel.style.display = "block";
      answerPanel.style.transition = "all 1s";
      faqBtns[i].children[1].textContent = "close";
    }
  });
});
