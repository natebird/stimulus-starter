import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showCurrentSlide()
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }

  get index() {
    return parseInt(this.data.get("index"))
    // if (this.data.has("index")) {
    //   return parseInt(this.data.get("index"))
    // } else {
    //   return 1
    // }
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}
