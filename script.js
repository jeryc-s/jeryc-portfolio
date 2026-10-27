const navigationButtons = document.querySelectorAll('.nav-button');
const contentSections = document.querySelectorAll('.content-section');

function showSection(sectionId) {
  // Ignore invalid section IDs instead of hiding the entire page.
  const target = document.getElementById(sectionId);
  if (!target?.classList.contains('content-section')) return;

  contentSections.forEach(section => {
    section.hidden = section !== target;
  });
  navigationButtons.forEach(button => {
    const isActive = button.dataset.section === sectionId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

navigationButtons.forEach(button => {
  button.addEventListener('click', () => showSection(button.dataset.section));
});

document.getElementById('year').textContent = new Date().getFullYear();
