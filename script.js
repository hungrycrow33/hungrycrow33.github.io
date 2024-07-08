// You can add any JavaScript functionality here
// For example, you might want to add smooth scrolling or other interactive features

document.addEventListener("DOMContentLoaded", function () {
  const chapters = document.querySelectorAll(".chapter");
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  let activeLink = null;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (activeLink) activeLink.style.backgroundColor = "";
        activeLink = document.querySelector(`.sidebar a[href="#${id}"]`);
        if (activeLink) activeLink.style.backgroundColor = "#fff7cc";
      }
    });
  }, observerOptions);

  chapters.forEach((chapter) => observer.observe(chapter));
});
