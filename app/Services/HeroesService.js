import store from "../store.js";
import Hero from "../Models/Hero.js"

// @ts-ignore
const _marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/characters?apikey=53496df3cd682930aa9108759e347171&&limit=100",
  timeout: 3000
})

// @ts-ignore
const _sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/stevenpackard/heroes",
  timeout: 15000
})

class HeroesService {
  constructor() {
    this.getMarvelCards()
    this.getMyCards()
  }

  getMarvelCards() {
    _marvelApi.get()
      .then(res => {
        console.log(res.data.data.results);
        let heroes = res.data.data.results.map(nh => new Hero(nh))
        store.commit("heroes", heroes)
      })
      .catch(err => console.log(err)
      )
  }

  getMyCards() {
    _sandboxApi.get('')
      .then(res => {
        console.log(res.data.data);
        let heroes = res.data.data.map(nh => new Hero(nh))
        store.commit("myHeroes", heroes)
      })
  }


  collect(id) {
    let hero = store.State.heroes.find(h => h.id == id)
    console.log(hero);

    _sandboxApi.post('', hero)
      .then(res => {
        this.getMyCards()
      })
      .catch(err => console.log(err)
      )
  }
}

const HEROESSERVICE = new HeroesService();
export default HEROESSERVICE;