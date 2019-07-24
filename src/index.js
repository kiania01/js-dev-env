// import "./index.css";
// import numeral from "numeral";
import { getUsers } from "./api/userApi"; // reference to the api call

//Populate table of users via API call
getUsers().then(result => {
  // promise
  let usersBody = "";

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      </tr>`;
  });

  // returned string of HTML - usersBody. Place in inner HTML of that "users" table body in index.html
  global.document.getElementById("users").innerHTML = usersBody;
});
