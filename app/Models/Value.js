

export default class Value {
    constructor(value) {
        this.name = value.name;
        this.task = value.task
    }
    get template() {
    return `<div class="value">
    <div class="row ml-5 mr-5 mt-5" id="row1">
        <div class="col-3 mr-5" id="row1col1">
            <div class="text ml-5 mr-5 mt-3" id="title1"><h1>${this.title}</h1></div>
        </div>
            
    </div>
    <div class="row ml-5 mr-5" id="row2">
      <div class="col-3 mr-5"id="row2col1"></div>
        <div class="text ml-5 mr-5 mt-3" id="title1"><h3>${this.task}</h3></div>
    </div>
</div>
    `
    
  }
}