/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import "./styles/app.css";

const selectCompanyDescription = (id) => {
  document.querySelectorAll("[data-company-description]").forEach((element) => {
    console.log(element.dataset, id);
    if (element.dataset.companyDescription === id) {
      element.classList.remove("hidden");
    } else if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // gsap.from(".space-y-6", {
  //   opacity: 0,
  //   y: -50,
  //   duration: 1,
  // });

  document
    .querySelectorAll("[data-select-work-experience]")
    .forEach((element) => {
      console.log(element.innerHTML);
      element.addEventListener("click", (element) => {
        console.log(element.target);
        selectCompanyDescription(element.target.dataset.selectWorkExperience);
      });
    });
});
