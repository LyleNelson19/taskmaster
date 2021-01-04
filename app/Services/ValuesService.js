
  import { ProxyState } from "../AppState.js";
  import Value from "../Models/Value.js";
  import Store from "../Store.js"

import ValuesController from "../Controllers/valuesController.js";

  
class ValuesService {
    constructor() {
        console.log("Creating Service")
      }
      createValue(){
        console.log("Value Created from the service");
        let newValue = new Value("New Value");
        let values = [...Store.State.values, newValue];
        Store.commit('values',values)
      }
    }
 
const service = new ValuesService();
export default service;
