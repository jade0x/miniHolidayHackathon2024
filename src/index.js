function changeBG() {
  document.body.classList.contains("alt")
    ? document.body.classList.remove("alt")
    : document.body.classList.add("alt");
}

var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://api.countapi.xyz/hit/holidayhack2024.netlify.app/visits"
);
xhr.responseType = "json";
xhr.onload = function () {
  if (this.response && this.response.value) {
    document.getElementById(
      "visit-count"
    ).innerText = `This is visit #${this.response.value} &lt;3`;
  }
};
xhr.send();
