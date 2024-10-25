document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more');
    const teamMembersContainer = document.querySelector('.team-members');

    // Read More button functionality
    readMoreBtn.addEventListener('click', () => {
        alert('More information about our company will be displayed here.');
    });

    // Team members data
    const teamMembers = [
        { name: 'John Doe', role: 'CEO', image: 'https://via.placeholder.com/100' },
        { name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/100' },
        { name: 'Mike Johnson', role: 'Designer', image: 'https://via.placeholder.com/100' },
        { name: 'Sarah Williams', role: 'Developer', image: 'https://via.placeholder.com/100' }
    ];

    // Populate team members
    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('team-member');
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamMembersContainer.appendChild(memberElement);
    });
});