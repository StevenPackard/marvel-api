export default class Hero {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.img || data.thumbnail.path + '.' + data.thumbnail.extension
    this.description = data.description || "No description provided."
  }

  get Template() {
    return /*html*/ `
    <div class="card m-3">
      <img class="card-img-top half" src="${this.img}" alt="">
      <div class="card-body" >
        <h4 class="card-title">${this.name}</h4>
        <p class="card-text inner-text">${this.description}</p>
      </div>
      <button class="btn btn-primary push-down align-self-center" onclick="app.heroesController.collect(${this.id})">Collect</button>
    </div >
      `
  }
}

 // <button class="btn btn-primary push-down align-self-center">Collect</button>