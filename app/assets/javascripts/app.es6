//               Restructuring to ES6
// 1.  instead 'var' use const to store "Constants" object
const Constants = {
    CHANGE_EVENT: 'change',
    ADD_COMMENT: 'comments.add'
};

//               Restructuring to ES6
// 2. instead of store to new extend with 'var' keyword use
//    'class' + "Store" as class's name that "extends" from "EventEmitter"
//    and contain all too class's body "{ ... }"
// 3. define 'constructor' function
//    contain in body of this function empty "_comments" comment array adding "this" keyword
//    add "super" function to add "constructor" function inheritance
// 4. clean up all commas after every function in class's body
// 5. change structure of every function in body of class following example above:
//    func_name (par) { ... }
// 6. check that page rendering without mistakes
//    look to console, you should have "Store.comments is not a function" error
class Store extends EventEmitter {
    constructor() {
        super();
        this._comments = [];
    }

    addComment (comment) {
        this._comments[comment.id] = comment
    }

    comments () {
        return this._comments
    }

    addChangeListener (callback) {
        this.on(Constants.CHANGE_EVENT, callback)
    }

    removeChangeListener (callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback)
    }

    emitChange () {
      this.emit(Constants.CHANGE_EVENT)
    }

}
//               Restructuring to ES6
// 7. add "commentStore" variable that equal to new "Store" object
let commentStore = new Store();
// 11. change "var" of ApiDispatcher to "let"
let ApiDispatcher = new Flux.Dispatcher();

//               Restructuring to ES6
// 8. in body of dispatcher's switch rename "Store" to "commentStore"
// 12. change structure of function that is first argument of dispatcher's register to es6 format
//     for this delete "function" keyword and add "=>" after parameter
//     instead taking "action" variable as parameter of switch type just: "payload.actionType"
ApiDispatcher.register((payload) => {
    // console.log(payload);
    switch(payload.actionType) {
        case Constants.ADD_COMMENT:
            commentStore.addComment(payload.comment);
            commentStore.emitChange();
            break;
        default:
            // NO-OP
    }
});

// 13. change "Actions" variable with ew extend to "class" with "Actions" name
//     then contain in body "{ ... }" all stuff from second argument of extend method that was before
//     deal with syntax of "addComment" function
class Actions {
    addComment (params) {
        ApiDispatcher.dispatch({
            actionType: Constants.ADD_COMMENT,
            comment: params
        })
    }
}

// 14. Add new variable that equal to new "Actions" object that "addComment" function will be used
//     console: commentActions.addComment({ id: 1, author: "Bob", body: "I love this shit", rank: 7})
//     rendering: object with structure of "CommentList" component
let commentActions = new Actions();
