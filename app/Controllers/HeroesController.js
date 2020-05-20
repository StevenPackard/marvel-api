import store from "../store.js";
import HEROESSERVICE from "../Services/HeroesService.js"

//Private
function _drawHeroes() {
  let heroes = store.State.heroes;
  let template = ''
  heroes.forEach(h => template += h.Template)
  document.getElementById("marvelCards").innerHTML = template
  console.log(heroes);
}

function _drawMyHeroes() {
  let heroes = store.State.myHeroes;
  let template = ''
  heroes.forEach(h => template += h.Template)
  document.getElementById("myCards").innerHTML = template
  console.log(heroes);


}

//Public
export default class HeroesController {
  constructor() {
    store.subscribe("heroes", _drawHeroes);
    store.subscribe("myHeroes", _drawMyHeroes);
  }

  collect(id) {
    HEROESSERVICE.collect(id);
  }

}