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

const messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log('Name:', usersName);
    console.log('Email:', usersEmail);
    console.log('Message:', usersMessage);

    const messageSection = document.querySelector('#messages');

    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>: 
        <span>${usersMessage}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = removeButton.parentNode;

        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    messageForm.reset();
});

const githubUsername = 'ngs-afk';

fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(repositories => {
        if (repositories.length === 0) {
            console.log('No repositories found.');
            alert('Oops! It looks like there are no repositories available in this Github account.');
        } else {
            console.log('Repositories:', repositories);
            const projectSection = document.getElementById('Projects');
            const projectList = projectSection.querySelector('ul');

            for (let i = 0; i < repositories.length; i++) {
                const repository = repositories[i];
                const project = document.createElement('li');
                project.innerText = repository.name;
                projectList.appendChild(project);
            }
        }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Sorry, something went wrong while fetching the repositories. Please try again later.');
    });