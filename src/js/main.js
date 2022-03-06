const tabs = document.querySelectorAll("#tab_links li");
const tabContents = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => content.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
