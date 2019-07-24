import "whatwg-fetch"; // runs in browsers that doesnt have fetch support

export function getUsers() {
  // only public function "export"
  return get("users");
}

function get(url) {
  // the call that uses fetch
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
