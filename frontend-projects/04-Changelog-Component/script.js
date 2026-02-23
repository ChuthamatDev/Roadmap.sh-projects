const data = [
  {
    date: "December 1, 2025",
    title: "Project Solutions & Feedback",
    description: "Submit your implementation of any roadmap project and get detailed feedback from the community and AI reviewers."
  },
  {
    date: "November 30, 2025",
    title: "Enhanced User Profiles",
    description: "Showcase your completed projects, learning streaks, and certifications on your new public profile page."
  },
  {
    date: "November 28, 2025",
    title: "Interactive Skill Trees",
    description: "Visualize your learning journey with our new interactive skill trees for Frontend, Backend, and DevOps."
  },
  {
    date: "November 25, 2025",
    title: "Dark Mode 2.0",
    description: "A completely redesigned dark mode experience with better contrast, custom themes, and glassmorphism elements."
  }
];

let logIndex = 0;
const maxLogsToDisplay = 2;

document.addEventListener("DOMContentLoaded", () => {
    const visitButton = document.querySelector(".js-visit-button");

    if (visitButton) {
        visitButton.addEventListener("click", displayNextChangelog);
        checkButtonVisit();
    }
});

function displayNextChangelog() {
    const timelineList = document.querySelector(".changelog-timeline");

    for (let i = 0; i < maxLogsToDisplay; i++) {
        if (logIndex < data.length) {
            const logData = data[logIndex];
            const { date, title, description } = logData;

            const li = document.createElement('li');
            li.className = 'changelog-item added-log';
            li.style.setProperty('--delay', '1'); // Instant reveal for dynamically added items
            
            li.innerHTML = `
                <span class="changelog-date">${date}</span>
                <div class="changelog-content">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            `;

            timelineList.appendChild(li);
            logIndex++;
        } else {
            break;
        }
    }
    checkButtonVisit();
}

function checkButtonVisit() {
    const buttonContainer = document.querySelector(".visit-changelog-button");
    
    if (logIndex >= data.length) {
        if (buttonContainer) {
            buttonContainer.style.opacity = '0';
            buttonContainer.style.pointerEvents = 'none';
            setTimeout(() => {
                buttonContainer.style.display = 'none';
            }, 300);
        }
    } else {
        if (buttonContainer) {
            buttonContainer.style.display = 'flex';
        }
    }
}