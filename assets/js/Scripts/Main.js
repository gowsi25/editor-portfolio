// Navbar
const Toggle = document.querySelector('#primary-menu-toggle');
const Navbar = document.querySelector('#primary-menu');

Toggle.addEventListener('click', () => {
    Navbar.classList.toggle('slide');
    Navbar.classList.toggle('open');
    Toggle.classList.toggle('cross');
});


// Banner Text animation
function textAnimate(sliderElement) {
    const textsToAnimate = sliderElement.querySelectorAll(".Text-Animate");
    const options = {
      root: null,
      rootMargin: '0px 0px -5% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animate = new SplitType(entry.target, { types: 'words,chars' });
          gsap.from(animate.chars, {
            opacity: 0,
            x: "50%",
            ease: "elastic.out(0.6, 0.3)",
            duration: 3,
            stagger: { amount: 0.8 },
            delay: 1.6
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    textsToAnimate.forEach(textToAnimate => {
      observer.observe(textToAnimate);
    });
  }
  textAnimate(document);