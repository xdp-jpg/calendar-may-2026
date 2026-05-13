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

  // Check if this is today
  if (isCurrentMonth && today.getDate() === day) {

    cell.classList.add("today");

    const message = document.createElement("div");
    message.classList.add("message");

    // Daily message logic
    let messageText = "";

    if (day === 13) {
      messageText = "χιχι, το πάτησες όντως! φιλί παντού <3";
    } else if (day === 14) {
      messageText = "σε χαϊδεύω όπως ο αέρας τα μαλλιά σου και σε φιλάω όπως ο ήλιος τα μαγουλα σου :*";
    } else {
      messageText = "Have a great day!";
    }

    message.textContent = messageText;

    cell.appendChild(message);
  }

  calendar.appendChild(cell);
}
