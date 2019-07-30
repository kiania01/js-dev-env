import "whatwg-fetch"; // runs in browsers that doesnt have fetch support
import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export function getUsers() {
  // public function "export"
  return get("users");
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

// the calls that use fetch
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: "DELETE"
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
