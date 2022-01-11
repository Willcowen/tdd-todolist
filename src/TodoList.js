/* 
DONE - Create a todo item that has an ID, text description, and starts off incomplete 
DONE - Get all todo items
DONE - Set a todo completed by its ID
DONE - Get only todo items that are incomplete
DONE - Get only todo items that are complete
DONE - Search and return a todo item by its ID, or return a message saying it doesn’t exist
DONE - Remove a todo item by its ID 
*/


class TodoList {
    constructor(){
    this.list = []
    this.nextID = 1
    }
    create(description){
      const todo = {
          id: this.nextID,
          text: description,
          status: "incomplete"
      }
      this.nextID++
      this.list.push(todo)
      return todo
    }

    setComplete(numberID) {
       this.list[numberID - 1]["status"] = "complete"
       return this.list[numberID - 1]
    }

    getIncomplete () {
        const output = []
        for (let i = 0; i < this.list.length; i++) {
        if (this.list[i]["status"] === "incomplete") {
            output.push(this.list[i])
        }
        }
        return output
    }

    getComplete() {
        const output = []
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]["status"] === "complete") {
                output.push(this.list[i])
            }
        }
        return output
    }
    getTodo(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] == id) {
                return this.list[i]
            }
        }
        return "Todo not found"
    }
    deleteTodo(id){
        if (typeof(id) !== "number"){
            return "invalid ID"
        }
        const output = []
        for(let i = 0; i < this.list.length; i++) {
            if (this.list[i]['id'] !== id) {
                output.push(this.list[i])
            }
        }
        return output
    }
  
    getAll(){
        return this.list
    }
  }
  module.exports = TodoList
