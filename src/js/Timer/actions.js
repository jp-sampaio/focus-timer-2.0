import state from "./state.js"
import * as timer from "./timer.js"
import { minutes } from "../main.js"
import * as elements from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDown()
  sounds.soundPlay.play()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  state.minutes = minutes
  timer.updateDisplay(state.minutes)

  sounds.soundReset.play()
}

export function increase() {
  state.minutes += 5
  state.minutes = state.minutes > 60 ? 60 : state.minutes
  timer.updateDisplay()
  sounds.soundMaisMenos.play()
}

export function toIncrease() {
  state.minutes -= 5;
  if (state.minutes < 0) {
    state.minutes = 0
    return;
  }
  timer.updateDisplay()
  sounds.soundMaisMenos.play();

}

export function tree() {
  elements.buttonTree.classList.toggle("selected")
  elements.buttonRain.classList.remove("selected")
  sounds.soundRain.pause();
  elements.buttonCoffee.classList.remove("selected")
  sounds.soundCoffeeShop.pause();
  elements.buttonFire.classList.remove("selected")
  sounds.soundFirePlace.pause();
  
  elements.buttonTree.classList.contains("selected")
    ? sounds.soundFlorest.play()
    : sounds.soundFlorest.pause()
}

export function rain() {
  elements.buttonRain.classList.toggle("selected")
  elements.buttonTree.classList.remove("selected")
  sounds.soundFlorest.pause();
  elements.buttonCoffee.classList.remove("selected")
  sounds.soundCoffeeShop.pause();
  elements.buttonFire.classList.remove("selected")
  sounds.soundFirePlace.pause();


  elements.buttonRain.classList.contains("selected")
    ? sounds.soundRain.play()
    : sounds.soundRain.pause();
}

export function coffee() {
  elements.buttonCoffee.classList.toggle("selected")
  elements.buttonTree.classList.remove("selected")
  sounds.soundFlorest.pause();
  elements.buttonRain.classList.remove("selected")
  sounds.soundRain.pause();
  elements.buttonFire.classList.remove("selected")
  sounds.soundFirePlace.pause();

  elements.buttonCoffee.classList.contains("selected")
    ? sounds.soundCoffeeShop.play()
    : sounds.soundCoffeeShop.pause()
}

export function fire() {
  elements.buttonFire.classList.toggle("selected")
  elements.buttonTree.classList.remove("selected")
  sounds.soundFlorest.pause();
  elements.buttonRain.classList.remove("selected")
  sounds.soundRain.pause();
  elements.buttonCoffee.classList.remove("selected")
  sounds.soundCoffeeShop.pause();

  elements.buttonFire.classList.contains("selected")
    ? sounds.soundFirePlace.play()
    : sounds.soundFirePlace.pause()
}
