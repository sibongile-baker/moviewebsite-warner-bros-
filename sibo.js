document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove ('scrolled');
    }
  })

  window.onbeforeunload = function() {
    // Show the spinner element
    document.querySelector(".spinner").style.display = "block";
  };

  