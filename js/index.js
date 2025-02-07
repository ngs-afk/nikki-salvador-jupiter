const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `<span>&#169 ${year} Nikki Salvador<\span>`;
footer.appendChild(copyright);

const skillsList = ['Google Workspace', 'Microsoft Office', 'QuickBooks'];
const skillsSection = document.getElementById('Skills');
const skillsUL = skillsSection.querySelector('ul');

for (let skill of skillsList) {
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsUL.appendChild(skillLI);
}