function changeBG() {
  document.body.classList.contains("alt")
    ? document.body.classList.remove("alt")
    : document.body.classList.add("alt");
}

async function getVisitCount() {
  try {
    const response = await fetch(
      "https://api.countapi.xyz/hit/holidayhack2024.netlify.app//visits"
    );
    const data = await response.json();
    document.getElementById(
      "visit-count"
    ).innerText = `This page has been visited ${data.value} times`;
  } catch (error) {
    console.error("Error fetching count:", error);
    document.getElementById("visit-count").innerText = "Error loading";
  }
}

getVisitCount();
