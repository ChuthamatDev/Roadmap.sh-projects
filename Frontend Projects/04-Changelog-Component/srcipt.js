const data = [
  {
    date: "Novemeber 30, 2025",
    name: "Add Frontend Pprojects",
  },
  {
    date: "November 30, 2025",
    name: "Fix 02 basic HTML website",
  },
  {
    date: "November 29, 2025",
    name: "first commit",
  },
];

let logIndex = 0;
const maxLogsToDisplay = 1;

document.addEventListener("DOMContentLoaded", () => {
    const visitButton = document.querySelector(".js-visit-button");

    if (visitButton) {
        visitButton.addEventListener("click", displayNextChangelog);
        checkButtonVisit();
    }
})

function displayNextChangelog() {
    const timelineList = document.querySelector(".changelog-timeline");

    for (let i = 0;  i <  maxLogsToDisplay; i++) {
        if (logIndex < data.length) {
            const logData = data[logIndex];
            const { date, name } = logData;

            const html = `
            <li class="changelog-item added-log">
                <span class="changelog-date">${date}</span>
                <div class="changelog-content">
                    <h3>${name}</h3>
                </div>
            </li>
            `;

            timelineList.insertAdjacentHTML('beforeend', html);

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
            buttonContainer.style.display = 'none';
        }
    } else {
        if (buttonContainer) {
            buttonContainer.style.display = '';
        }
    }
}