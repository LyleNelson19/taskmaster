
  import { ProxyState } from "../AppState.js";
  import Value from "../Models/Value.js";


  
class ValuesService {
    constructor() {
        console.log("Creating Service")
      }
      createValue(rawData){
        console.log("Value Created from the service");
        let newValue = new Value(rawData);
        let values = [...ProxyState.values, newValue];
        }
    }
 
const service = new ValuesService();
export default service;
