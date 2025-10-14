const testimonials = [
  {
    name: "Tani",
    position: "Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigWKlWISFAczTGiE1x0oNdOqYA2gHEgUjUA&s",
    testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: "Buddy",
    position: "CEO",
    image:
      "https://i.pinimg.com/736x/50/d4/29/50d429ea5c9afe0ef9cb3c96f784bea4.jpg",
    testimonial: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    name: "Humpty",
    position: "Partner",
    image:
      "https://img.freepik.com/premium-vector/actress-vector-character-illustration-flat-style_1033579-56575.jpg",
    testimonial: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
  {
    name: "Bunny",
    position: "Partner",
    image:
      "https://static.vecteezy.com/system/resources/previews/029/444/891/non_2x/cartoon-character-illustration-people-illustration-2d-animation-character-illustration-free-vector.jpg",
    testimonial: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

const testimonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function showTestimonial() {
  const testimonial = testimonials[currentIndex];
  testimonialContainer.innerHTML = `
    <img src="${testimonial.image}" alt="${testimonial.name}" />
    <h3>${testimonial.name}</h3>
    <h6>${testimonial.position}</h6>
    <p>${testimonial.testimonial}</p>
  `;
}

function changeTestimonial(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = testimonials.length - 1;
  else if (currentIndex >= testimonials.length) currentIndex = 0;
  showTestimonial();
}

prevButton.addEventListener("click", () => changeTestimonial(-1));
nextButton.addEventListener("click", () => changeTestimonial(1));

showTestimonial();
