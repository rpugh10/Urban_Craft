const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');

menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');

  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? '×' : '☰';
});

links.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = '☰';
  });
});

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const projectForm = document.getElementById('project-form');

if (projectForm) {
  projectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Email: ${formData.get('email')}`,
      `Project type: ${formData.get('service')}`,
      `Project details: ${formData.get('message')}`,
    ].join('\n\n');

    const subject = encodeURIComponent('Urbancraft project enquiry');
    const message = encodeURIComponent(body);

    location.href = `mailto:info@urbancraft.ca?subject=${subject}&body=${message}`;
  });
}