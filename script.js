const date = new Date();
date.setDate(date.getDate() - 2);

const day = date.getDate().toString().padStart(2, "0");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[date.getMonth()];
const year = date.getFullYear();
const monthDT = (date.getMonth() + 1).toString().padStart(2, "0");

const timeTagDesktop = document.querySelector(".date-d");
timeTagDesktop.textContent = `${day} ${month}, ${year}`;

const timeTagMobile = document.querySelector(".date-m");
timeTagMobile.textContent = `${day}/${monthDT}/${year}`;

[timeTagDesktop, timeTagMobile].forEach(
  (item) => (item.dateTime = `${year}-${monthDT}-${day}`)
);
