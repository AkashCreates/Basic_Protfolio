/*==================== MENU SHOW & HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/

/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () =>

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL ABOUT ANIMATION ====================*/
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-gradient").forEach((span) => {
  gsap.to(span, {
    backgroundSize: "100% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: span,
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });
});
/*==================== DARK LIGHT THEME ====================*/

/*==================== MIXITUP FILTER PORTFOLIO ====================*/
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */
const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

// const workItems = document.querySelectorAll(".work-item");

// workItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // Remove 'active-work' from all items
//     workItems.forEach((i) => i.classList.remove("active-work"));

//     // Add 'active-work' to the clicked item
//     item.classList.add("active-work");
//   });
// });

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  outputMessage = document.getElementById("output-Message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    // outputMessage.textContent = "Write all the input fields";
    outputMessage.innerText = "Write all the input fields";
    

    setTimeout(() => {
      outputMessage.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_024fxxp",
        "template_9xvy4gj",
        "#contact-form",
        "bUFJGIEYk1vD7iW1u"
      )
      .then(
        () => {
          outputMessage.textContent = "Message sent ✔";

          contactName.value = "";
          contactEmail.value = "";
          contactMessage.value = "";

          setTimeout(() => {
            outputMessage.textContent = "";
          }, 3000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
  }
};

contactForm.addEventListener("submit", sendEmail);

/*==================== SCROLL REVEAL ANIMATION ====================*/
