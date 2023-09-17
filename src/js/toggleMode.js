import { buttonMode } from "./Timer/elements.js"

export default buttonMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark")
})