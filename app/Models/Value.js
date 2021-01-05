

export default class Value {
    constructor(data) {
        this.id = data.id || generateId();
        this.title = data.title;
        this.task = data.task;
    }
    get template() {
    return `
    <div class="col-3 pt-3 mb-3">
    <div class="card h-100"><h1>Title</h1>
    <div class="card-body"><h3>Task</h3>
    <button onclick="app.postController.delete(${this.id})">Delete</button>
    `
  }
}

function generateId() {
  return Math.floor(Math.random()*10000);
}