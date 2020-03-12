let store = {
    state:{
        addButton: false,
        filter: 'active',
        todoList:{
            item:[
                {
                    id:0,
                    name:'React',
                    description:'Learn react a little bit.',
                    isImportant:false,
                    isDone:false
                },
                {
                    id:1,
                    name:'Coffee',
                    description:'Make some coffee.',
                    isImportant: false,
                    isDone:false
                }
            ]
        }
    },
    getState(){
        return this.state;
    },
    _callSubscriber(){
        console.log("State changed")
    },

    removeBusiness(id){
        this.state.todoList.item.splice(id,1);
        this._updateId();
        this._callSubscriber(this.state);

    },
    changeFilter(filter){
        this.state.filter = filter;
        this._callSubscriber(this.state);
    },
    showModule(){
        if(this.state.addButton === false){
            this.state.addButton = true;
        }else{
            this.state.addButton = false;
        };
        this._callSubscriber(this.state);
    },
    makeImportant(id){
        this.state.todoList.item[id].isImportant = this.state.todoList.item[id].isImportant ? false : true;
        this._callSubscriber(this.state);
    },
    _updateId(){
        for(let i = 0; i<this.state.todoList.item.length; i++){
            this.state.todoList.item[i].id = i;
        }
    },
    makeDone(id){
        this.state.todoList.item[id].isDone = this.state.todoList.item[id].isDone ? false : true;
        this._callSubscriber(this.state);
    },
    addBusiness(name,desc,isImportant){
        console.log(isImportant)
      let newPost = {
          id:this.state.todoList.item.length,
          name: name,
          description:desc,
          isImportant:isImportant,
          isDone:false
      };
      this.state.todoList.item.push(newPost);
      this._callSubscriber(this.state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}
window.state = store.state;
export default store;