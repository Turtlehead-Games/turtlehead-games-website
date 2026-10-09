/* =========================================================
   TURTLEHEAD GAMES
   Site Functionality
   ========================================================= */

/* =========================================================
   PROJECT DATABASE
   ========================================================= */

const projectDatabase = {
  midnight: {
    code: "PROJECT 01",
    title: "THE MIDNIGHT SNACK",
    type: "PSX-INSPIRED / HORROR / SINGLE PLAYER",
    description:
      "This is our first attempt at creating a game. It's a short horror experience designed to teach us how tobuild a game and learn the ropes of game development.Playing as an apartment landlord, you wake up in the middle of a stormy night, discover something is very wrong in your complex, and realize SOMETHING is very hungry.",
    features: [
      "PSX-inspired low-poly visuals",
      "Small atmospheric environment",
      "Simple exploration and interaction",
      "Classic early-2000s horror influences"
    ]
  },
  fantasy: {
    code: "PROJECT 02",
    title: "DARK FANTASY PROJECT",
    type: "DARK FANTASY / CO-OP / ADVENTURE",
    description:
      " We don't want to give too much away just yet, but this is the game we are building toward:an unsettling dark fantasy cooperative adventure set in a strange world full of dangerous ruins, questionable heroes, and weird things waiting beyond the next door.",
    features: [
      "Four-player cooperative gameplay",
      "Dark fantasy environments",
      "Exploration and dungeon-based gameplay",
      "Retro-inspired visual direction",
      "A mix of serious adventure and humor"
    ]
  }
};

/* =========================================================
   TAB NAVIGATION
   ========================================================= */

const navButtons = document.querySelectorAll(".nav-btn");
const tabContents = document.querySelectorAll(".tab-content");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab");

    navButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((tab) => tab.classList.remove("active"));

    button.classList.add("active");

    const target = document.getElementById(targetTab);
    if (target) {
      target.classList.add("active");
    }
  });
});

/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

updateClock();
setInterval(updateClock, 1000);

/* =========================================================
   PROJECT MODAL
   ========================================================= */

function openModal(projectKey) {
  const project = projectDatabase[projectKey];
  if (!project) return;

  document.getElementById("modalCode").textContent = project.code;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalType").textContent = project.type;
  document.getElementById("modalDescription").textContent = project.description;

  const featureList = document.getElementById("modalFeatures");
  featureList.innerHTML = "";

  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });

  document.getElementById("projectModal").classList.add("open");
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("open");
}

/* Close modal when clicking backdrop or pressing Escape */
const modal = document.getElementById("projectModal");
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* =========================================================
   DEVELOPER CONSOLE
   ========================================================= */

const terminalOutput = document.getElementById("terminalOutput");
const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");

if (terminalForm) {
  terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();
    if (!command) return;

    /* User command entry */
    const userLine = document.createElement("div");
    userLine.className = "term-line term-command";
    userLine.textContent = "> " + terminalInput.value;
    terminalOutput.appendChild(userLine);

    /* Response handling */
    const response = document.createElement("div");
    response.className = "term-line";

    switch (command) {
      case "help":
        response.textContent = "AVAILABLE: HELP, STATUS, TURTLE, PROJECTS, CLEAR";
        break;

      case "status":
        response.textContent = "STATUS: BUILDING GAMES. DRINKING COFFEE. EVERYTHING IS FINE.";
        break;

      case "turtle":
        response.textContent = "TURTLEHEAD GAMES: SMALL STUDIO. STRANGE GAMES.";
        break;

      case "projects":
        response.textContent = "PROJECTS: THE MIDNIGHT SNACK / DARK FANTASY PROJECT";
        break;

      case "sudo":
      case "admin":
        response.textContent = "PERMITTED ONLY FOR TURTLES.";
        break;

      case "ls":
      case "dir":
        response.textContent = "FILES: README.TXT / MIDNIGHT_SNACK.EXE / THE_BUNKER.EXE";
        break;

      case "matrix":
      case "hack":
        response.textContent = "SYSTEM OVERRIDE FAILED. PLEASE LEAVE THE MAINFRAME ALONE.";
        break;

      case "clear":
        terminalOutput.innerHTML = "";
        terminalInput.value = "";
        return;

      default:
        response.className = "term-line term-error";
        response.textContent = `UNKNOWN COMMAND: "${command}"`;
        break;
    }

    terminalOutput.appendChild(response);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    terminalInput.value = "";
  });
}

/* =========================================================
   CONTACT FORM
   ========================================================= */

const signupForm = document.getElementById("signupForm");
const contactFormContainer = document.getElementById("contactFormContainer");

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    contactFormContainer.innerHTML = `
      <div class="contact-success">
        Thanks for signing up. We'll keep you posted.
      </div>
    `;
  });
}