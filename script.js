document.addEventListener("DOMContentLoaded", function () {
  let mybutton = document.getElementById("goToTopBtn");
  const projectOverview = document.getElementById("introduction");
  const chapters = document.querySelectorAll(".chapter");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  let activeLink = null;

  // Initially hide the button
  mybutton.style.display = "none";

  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scrolling smooth
    });
  };

  function isAtTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 1 && rect.bottom >= 1; // Using 1px threshold for better precision
  }

  function updateSidebarAndButton() {
    // Check if project overview is passed
    if (projectOverview.getBoundingClientRect().bottom <= 0) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }

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
        updateSidebarAndButton();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial call to set correct state on page load
  updateSidebarAndButton();
});
