// Question 1: Use the map method to create a new array containing the names of all projects.

import data from "./data";
const data = JSON.parse(data); 

async function fetchJSONData() {
  try {
    await fetch(dataRequest).then((response) => {
      return response.json();
    });
  } catch (error) {
    console.log(error);
  }
}
fetchJSONData().then((data) => {
  console.log(data);
});
