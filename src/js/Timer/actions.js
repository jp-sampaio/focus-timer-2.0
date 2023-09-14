import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDown()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function increase() {
  state.minutes += 5
  timer.updateDisplay()
}

export function toIncrease() {
  state.minutes -= 5
  timer.updateDisplay()
}