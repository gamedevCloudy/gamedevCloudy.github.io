function typewriterAnimation() {
  const h1 = document.querySelector("h1");
  if (!h1) {
    setTimeout(typewriterAnimation, 100);
    return;
  }
  const text1 = "hallo.";
  const text2 = "प्रणाम!";
  const typeSpeed = 100;
  const eraseSpeed = 50;
  const pauseBeforeErase = 1000;
  const pauseBeforeType2 = 500;

  let charIndex = 0;

  function typeText1() {
    if (charIndex < text1.length) {
      h1.textContent += text1.charAt(charIndex);
      h1.setAttribute("lang", "en");
      charIndex++;
      setTimeout(typeText1, typeSpeed);
    } else {
      setTimeout(eraseText, pauseBeforeErase);
    }
  }

  function eraseText() {
    if (h1.textContent.length > 0) {
      h1.textContent = h1.textContent.slice(0, -1);
      setTimeout(eraseText, eraseSpeed);
    } else {
      charIndex = 0;
      setTimeout(typeText2, pauseBeforeType2);
    }
  }

  function typeText2() {
    if (charIndex < text2.length) {
      h1.textContent += text2.charAt(charIndex);
      h1.setAttribute("lang", "hi");
      charIndex++;
      setTimeout(typeText2, typeSpeed);
    }
  }

  h1.textContent = "";
  typeText1();
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typewriterAnimation, 200);
});
