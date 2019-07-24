/* This file will look at the host name to determine if the application is running inDev. It is inDev, it will point to mock api on 3001. */

export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === "localhost";
  return inDevelopment ? "http://localhost:3001/" : "/";
}
