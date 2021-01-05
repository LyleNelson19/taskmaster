// import { Button } from "bootstrap";


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
  
import { ProxyState } from "../AppState.js";
import ValuesService from "../Services/ValuesService.js" ;



function draw(){
  let values = ProxyState.values;
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

createValue(event) {
  event.preventDefault();
  let formData = event.target;
  let rawValue = {
    body: formData.body.value
  };
  ValuesService.createValue(rawValue);
  draw();
  }

delete (id) {
console.log(id);
}
}