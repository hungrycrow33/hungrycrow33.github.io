document.addEventListener("DOMContentLoaded", function () {
  const chapters = document.querySelectorAll(".chapter"); // Assuming each section has a class 'chapter'
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  let activeLink = null;

  function isAtTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 1 && rect.bottom >= 1; // Using 1px threshold for better precision
  }

  function updateSidebar() {
    for (let chapter of chapters) {
      if (isAtTop(chapter)) {
        const id = chapter.id;
        const correspondingLink = document.querySelector(
          `.sidebar-link[href="#${id}"]`
        );

        if (activeLink) {
          activeLink.style.backgroundColor = ""; // Reset previous active link
        }

        if (correspondingLink) {
          correspondingLink.style.backgroundColor = "#fff7cc"; // Highlight color
          activeLink = correspondingLink;
        }

        break; // Exit loop after finding the first matching chapter
      }
    }
  }

  let ticking = false;
  document.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateSidebar();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial call to set correct state on page load
  updateSidebar();
});
