function setCookie() {
  window.history.back();
  Cookies.set("authToken", "736bwheguy32736ghwe6753", {
    expires: 2,
    path: "/",
  });
}

function getCookie() {
  const token = Cookies.get("authToken");
  if (token) {
    console.log("Cookies token value", token);
  } else {
    console.log("No Token Found");
  }
}
