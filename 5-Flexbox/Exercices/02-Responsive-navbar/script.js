const navToggler = document.querySelector(".toggler-container");
const navigation = document.querySelector(".navigation");

const toggleNav = () => {
  navigation.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 960) {
    navigation.style.transition = "transform 0.3s ease-out";
  } else {
    navigation.style.transition = "none";
  }
}).observe(document.body);
