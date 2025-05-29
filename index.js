/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//function that returns random object with 3 keys
const freelance = () => {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (200 - 20) + 20);
  return { name, occupation, rate }
}

//array of 100 random objects wtih 3 keys each
const state = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  state.push(freelance());
}

const avgRate = () => {
  return state.reduce((acc, elem) => {
    return acc + elem.rate / state.length;
  }, 0);
}

const avg = avgRate().toFixed(2);

const singleFreelancer = ({ name, occupation, rate }) => {
  const row = document.createElement('tr');
  const column1 = document.createElement('td');
  column1.innerText = name;
  const column2 = document.createElement('td');
  column2.innerText = occupation;
  const column3 = document.createElement('td');
  column3.innerText = `$${rate}`;
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  return row;
}

const arrayOfFreelancers = (arr) => {
  const tab = document.createElement('table');
  const tableHead1 = document.createElement('th');
  tableHead1.innerText = 'Name';
  tab.appendChild(tableHead1);
  const tableHead2 = document.createElement('th');
  tableHead2.innerText = 'Occupation';
  tab.appendChild(tableHead2);
  const tableHead3 = document.createElement('th');
  tableHead3.innerText = 'Rate';
  tab.appendChild(tableHead3);
  for (const obj of arr) {
    tab.appendChild(singleFreelancer(obj));
  }
  return tab;
}
// console.log(arrayOfFreelancers(state));

const avgRateOfFreelancers = () => {
  return `<h4>The average rate is $${avg}.<h4>`
}

const renderFunc = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    ${avgRateOfFreelancers()}
    <table id="FreelancerRows"></table>
  `;
  $app.querySelector("#FreelancerRows").replaceWith(arrayOfFreelancers(state));
}

renderFunc();
