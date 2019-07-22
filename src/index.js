import { getUsers } from "./api/userApi";

//Populate table of users via API call
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      </tr>`;
  });

  global.document.getElementById("users").innerHTML = usersBody;
});

// import "./index.css";
// import numeral from "numeral";

// /* eslint-disable no-console */

// const courseValue = numeral(1000).format("$0,0.00");
// console.log(`I would pay ${courseValue} for this awesome course!`);