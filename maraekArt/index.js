let headingEl = document.getElementById("heading-el")
let buttonEl = document.getElementById("button-el")

function thirdEye() {
    headingEl.innerHTML=(`
    <img src="tool.png" height="150px">
    `)
}

buttonEl.addEventListener("dblclick", function resetHeading() {
    headingEl.textContent = ("maræk.art")
})

