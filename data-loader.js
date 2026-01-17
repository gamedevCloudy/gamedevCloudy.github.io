async function loadData() {
  const [profile, projects, stack] = await Promise.all([
    fetch('/data/profile.json').then(r => r.json()),
    fetch('/data/projects.json').then(r => r.json()),
    fetch('/data/stack.json').then(r => r.json())
  ]);

  loadHero(profile);
  loadProjects(projects);
  loadStack(stack);
  loadFooter(profile);
}

function loadHero(profile) {
  const hero = document.querySelector('.hero');
  const navLinksHtml = profile.navLinks.map(link =>
    `<li><a href="${link.href}">${link.label}</a></li>`
  ).join('');

  const socialLinksHtml = profile.socialLinks.map((link, i) => {
    const separator = i < profile.socialLinks.length - 1 ? '|' : '';
    return `[<a target="_blank" href="${link.url}">${link.label}</a>]${separator}`;
  }).join(' ');

  hero.innerHTML = `
    <h1 lang="en">${profile.greeting}</h1>
    <p>${profile.name}.</p>
    <br />
    <p>${profile.title}</p>
    <br />
    <ul>${navLinksHtml}</ul>
    <p>${socialLinksHtml}</p>
    <blockquote>${profile.quote}</blockquote>
    <p>[<a href="${profile.resumeUrl}" target="_blank" style="color: #a6e3a1">Resume</a>]</p>
  `;
}

function loadProjects(projects) {
  const container = document.getElementById('projects');
  const projectsHtml = projects.map(project => {
    const tagsHtml = project.tags.map(tag => `<div>${tag}</div>`).join('');
    const linkHtml = project.url
      ? `<a href="${project.url}" target="_blank">${project.linkText}</a>`
      : '';
    return `
      <div>
        <b>${project.title}</b>
        <p>${project.description}</p>
        <div class="flex tags">${tagsHtml}</div>
        ${linkHtml}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h3>projects</h3>
    <div class="flex spread">${projectsHtml}</div>
  `;
}

function loadStack(stack) {
  const container = document.getElementById('stack');
  const stackHtml = stack.map(category => {
    const itemsHtml = category.items.map(item => `<li>${item}</li>`).join('');
    return `
      <div>
        <p><b>${category.category}</b></p>
        <ul>${itemsHtml}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <h3>Tech Stack</h3>
    <div class="flex spread">${stackHtml}</div>
  `;
}

function loadFooter(profile) {
  const footer = document.querySelector('footer');
  footer.innerHTML = `contact: <a href="mailto:${profile.contactEmail}">[email]</a>`;
}

loadData();
