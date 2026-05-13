const calendar = document.getElementById("calendar");

const year = 2026;
const month = 4; // May (0 = January)

const today = new Date();
const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

// Adjust so week starts Monday
const startOffset = (firstDay + 6) % 7;

// Empty cells before first day
for (let i = 0; i < startOffset; i++) {
  const empty = document.createElement("div");
  calendar.appendChild(empty);
}

// Create days
for (let day = 1; day <= daysInMonth; day++) {
  const cell = document.createElement("div");
  cell.classList.add("day");
  cell.innerHTML = `<strong>${day}</strong>`;

  // Highlight today
  if (isCurrentMonth && today.getDate() === day) {
    cell.classList.add("today");

    const message = document.createElement("div");
    message.classList.add("message");

    message.textContent = "χιχι, το πάτησες όντως!\nSφιλί παντού <3";
    cell.appendChild(message);
  }

  calendar.appendChild(cell);
}
