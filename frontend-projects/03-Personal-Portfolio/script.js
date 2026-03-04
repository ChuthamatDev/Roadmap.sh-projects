const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);


document.getElementById('sun_icon').style.display = savedTheme === 'light' ? 'block' : 'none';
document.getElementById('moon_icon').style.display = savedTheme === 'dark' ? 'block' : 'none';

function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  document.getElementById('sun_icon').style.display = newTheme === 'light' ? 'block' : 'none';
  document.getElementById('moon_icon').style.display = newTheme === 'dark' ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".section-contact form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); 

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const msg = document.getElementById("message").value.trim();

            if (!name || !email || !msg) {
                alert("Please fill out all fields.");
                return;
            }

            alert("Message sent! 😍");

            form.reset();
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.section-intro-content, .section-intro-info, .section-education, blockquote, .section-contact, .section-projects li, article'
    );

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        if(index % 3 !== 0) {
            el.style.transitionDelay = `${(index % 3) * 0.15}s`;
        }
        observer.observe(el);
    });
});
