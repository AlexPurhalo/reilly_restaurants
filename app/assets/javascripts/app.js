//               Actions naming
// 1. add variable equal to object
// 2. add keys pare that equal to events, keys should be uppercase
// 3. first key should be event changer that has "change" value
// 4. second key equal to data adding to comments array, "comments.add"
var Constants = {
    CHANGE_EVENT: 'change',
    ADD_COMMENT: 'comments.add'
};
//               Adding comments to Store throw addComment function to  _comments array
// 1. define store variable equal to new extend
//    extend should take as argument empty object, EventEmitter.prototype and another object
//    - console: Store, output: Object {_events: undefined, maxListeners: undefined}
// 2. in third object add "_comments" key with array that contain "1" number as value, "_comments: [1]"
//    - console: Store, output: Object { ... undefined, _comments: Array[1]}
//    - console: Store._comments, output: [1]
//    - console: EventEmitter.prototype, output: {_events: undefined, _maxListeners: undefined}
//    - console: EventEmitter.prototype._comments, output: undefined
//    make _comments equal to empty array instead containing of "1" number, "_comments: [1]"
// 3. add function named "addComment" that takes "comment" parameter
//    inside "addComment" function add "comment" object that is parameter
//    "comment" object should has  "id" key, this data should be in "this" "_comments" array
//    make this data within array equal to taken "comment" parameter
//    - console: Store.addComment({id: 1, body: "Hi!"})
//    - console: Store._comments, output: object with recently added content
// 4. add "comments' function that return this "_comments" array

//               Flux Implementation Part I
// 1. add "addChangeListeners" function that takes "callback" as parameter
//    within this function add "this" "on" method
//    "on" method should takes "Constants" object "CHANGE_EVENT" key and "callback" par. as second argument
// 2. add "removeChangeListener" function with "callback" parameter
//    within this function add "this" "removeListeners" method
//    "removeListener" method should takes "Constants" object 's "CHANGE_EVENT" key and "callback" par. as second arg.
// 3. add "emitChange" function that contain "this" "emit"
//    method takes as argument "Constants" object with "CHANGE_EVENT" key
var Store = new _.extend({}, EventEmitter.prototype, {
//  _comments: [1] // to check how it works
    _comments: [],

    addComment: function(comment) {
        this._comments[comment.id] = comment
    },

    comments: function() {
        return this._comments
    },

    addChangeListener: function(callback) {
        this.on(Constants.CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback) {
        this.removeListener(Constants.CHANGE_EVENT, callback)
    },

    emitChange: function() {
      this.emit(Constants.CHANGE_EVENT)
    }

});

//               Flux Implementation Part 2
//    1. add "AppDispatcher" variable that equal to new "Flux"'s "Dispatcher" method
//    2. on ntext string add "register" method to "AppDispatcher"
//    3. method should take function with "payload" parameter
//    4. inside function add "action" variable that equal to "payload" parameter's "actionType"
//    6. under variable define switch that takes "action" variable as parameter
//    7. switch should has "Constants" class's "ADD_COMMENT" key
//    8. this case should describe "Store" with "addComment" method that takes "payload" parameter's "comment"
//
var ApiDispatcher = new Flux.Dispatcher();

ApiDispatcher.register(function(payload) {
    // console.log(payload);
    var action = payload.actionType;

    switch(action) {
        case Constants.ADD_COMMENT:
            Store.addComment(payload.comment);
            Store.emitChange();
            break;
        default:
            // NO-OP
    }
});

//              Actions adding
//    1. add Actions variable that equal to new "extend" method that takes two arguments
//    2. first argument is an empty object
//    3. second is "addComment" function that takes "params" as parameter
//    4. function contains "ApiDispatcher" that has "dispatch" method
//    5. method takes as argument object with "actionType" and "comment" keys
//    6. first "actionTypes" key is equal to "Constants" object's "ADD_COMMENT" key that is "'comments.add'"
//    7. second "comment" key is equal to gotten "params" parameter
//       - console: Actions, output: object with "addComment" function
//       - add console.log(payload) before "ApiDispatcher"'s switch
//       - console: Actions.addComment({id: 1, body: "it works"}),
//         output: Object with "actionType" that equal to "comments.add" action
//                 and "comment" that equal to other Object that store recently added data: id: 1, body: "it works"
//       - mark console.log(payload) as comment and refresh page
//       - console: Store.comments(), output: empty array
//       - console: Actions.addComment({id: 1, body: "works"})
//       - console: Actions.addComment({id: 2, body: "also works"})
//       - console: Store.comments(), output: recently added objects throw "Actions"'s "addComment" function
//    8. in "ApiDispatcher" that takes register method add to case "Store" with "emitChange" method
//       - add console.log("rendering") into CommentList to rendering
//       - refresh page and type in to console: Actions.addComment({id: 1, body: 'hi"})
//       - output should be a "rendering" text after every time when we add objects to store
//    9. Go to CommentList component instead of empty array add "Store.comments()" function to map elements
//       - console: Actions.addComment({id: 1, author: "Alex", body: "hey, it works", rank: 9})
//       - rendering: jsx following CommentList's structure
//       - make as comment "console.log("rendering") in render function

var Actions = new _.extend({}, {
   addComment: function(params) {
       ApiDispatcher.dispatch({
           actionType: Constants.ADD_COMMENT,
           comment: params
       })
   }
});