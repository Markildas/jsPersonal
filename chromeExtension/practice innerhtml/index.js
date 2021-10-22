// Use .innerHTML to render a Buy! button inside the div container
const cointainer = document.getElementById("container")

cointainer.innerHTML = "<button onclick='buy()'> Buy! </button>"

function buy() {
    cointainer.innerHTML += "<p>Thank you for buying!</p>"
}