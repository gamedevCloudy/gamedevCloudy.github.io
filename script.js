function typewriterAnimation() {
  const h1 = document.querySelector("h1");
  const text1 = "hallo.";
  // const text2 = "pranam.";
  const text2 = "प्रणाम!";
  const typeSpeed = 100; // milliseconds per character
  const eraseSpeed = 50; // milliseconds per character when erasing
  const pauseBeforeErase = 1000; // pause after typing before erasing
  const pauseBeforeType2 = 500; // pause after erasing before typing second text

  let charIndex = 0;

  // Type first text
  function typeText1() {
    if (charIndex < text1.length) {
      h1.textContent += text1.charAt(charIndex);
      charIndex++;
      setTimeout(typeText1, typeSpeed);
    } else {
      setTimeout(eraseText, pauseBeforeErase);
    }
  }

  // Erase text
  function eraseText() {
    if (h1.textContent.length > 0) {
      h1.textContent = h1.textContent.slice(0, -1);
      setTimeout(eraseText, eraseSpeed);
    } else {
      charIndex = 0;
      setTimeout(typeText2, pauseBeforeType2);
    }
  }

  // Type second text
  function typeText2() {
    if (charIndex < text2.length) {
      h1.textContent += text2.charAt(charIndex);
      charIndex++;
      setTimeout(typeText2, typeSpeed);
    }
  }

  // Start animation
  h1.textContent = "";
  typeText1();
}

// Call the function when DOM is ready
typewriterAnimation();
