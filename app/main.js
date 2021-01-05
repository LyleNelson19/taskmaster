import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
// class EventEmitter {
//   _listeners = {
//     "eventName" : []
//   }
//   /**
//    * 
//    * @param {*} eventName
//    * @param {*} fn 
//    */
//   on (eventName, fn) { 
//     if (typeof fn != 'function'){return}
//     this._listeners[eventName] = this._listeners[eventName] || 
//     this._listeners[eventName].push(fn)
//   }

//   /**
//    *
//    * @param {*} eventName
//    * @param {*} fn 
//    */
//   off (eventName, fn)  {
//     if (!this.listener[eventname]){return}
//     let indexOfFnToRemove = this.listeners[eventName].findIndex(f=> f === fn)
//   }
//   /**
//    * 
//    * @param {*} eventName
//    */
//   notify (eventName) { }
// }

// export default ValuesController