// import { Button } from "bootstrap";
// import { ProxyState } from "../AppState.js";


// //Private
// function _draw() {
//   let values = ProxyState.values;
//   let template = ''
//   values.forEach(v => template += v.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <button className="btn btn-info" onclick="app.valuesController.createList()">Create</button>  
//   <div className="card-columns values">
//       ${template}
//   </div>
//   `
// }

// Public

import ValuesService from "../Services/ValuesService.js" ;
import store from "../store.js";


function draw(){
  let values = store.State.values;
  let templates = "";
  values.forEach(value => {
  templates += value.Template;
  });
  document.getElementById("values").innerHTML = templates
}

export default class ValuesController {
  constructor() {
    console.log("Building Controller");
    draw();
  }

createValue() {
  console.log("Value Created");
  ValuesService.createValue();
  draw();
  }
}