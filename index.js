// https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //storage
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //storage
  }
};

toggleSwitch.addEventListener("change", switchTheme, false);

//Store the user preference for future visits
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
