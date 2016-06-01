//              Creating of Form Component
// 1. class definition
//    - add 'CommentForm' class
//    - with constructor and render functions
// 2. form rendering
//    - in render function return 'form' tag
//    - 'form' tag should has two inputs with names 'author' and 'body'
//    - also bot inputs have 'text' type
// 3. showing in 'CommentSection'
//    - add export of this file
//    - add rendering of 'CommentForm' to 'CommentSection' class, just above 'CommentList'
//    - don't forget add export and import of 'CommentForm' component
// 4. state for values
//    - back to form's inputs and add values for them
//    - values should be expressions 'this' 'state' of 'author' or 'body' fields
//    - in constructor default state for 'author' and 'body' values
//    - for this add 'this' 'state' that equal to 'this' 'defaultState'
//    - above define 'this' 'defaultState' that equal to object with two keys
//    - first key is 'author' and second is 'body'
//    - both keys should be equal to empty string
// 5. events adding
//    - back to browser and try to type something into field
//    - for now this impossible because we don't have 'onChange' event that allow take any values
//    - to fix this back to inputs and add 'onChange' event
//    - event should be equal to expression of 'this' 'onFieldChange' function
//    - now we want define this function adding its above 'render' function
//    - 'onFieldChange' should takes 'event' parameter
//    - content should contains by 'prop' variable that equal to empty object;
//    - bellow 'prop' takes 'event.target.name' key that equal to 'event.target.value' value
//    - as you see 'name' of 'event.target' is field's name 'author' or 'body' 
//    - after text typing 'name' gonna equal to property of 'value' instance 
//    - next you want add 'setState' for current property
//    - for this add 'this' 'setState' method that takes 'prop' object as argument
//    - finally we need bind 'onFieldChange' function
//    - to solve problem add 'bind' method to function from 'input' tag
//    - 'bind' method should take 'this' as argument
//    - add console.log with 'props' to check how works data taking from inputs
// 6. form submitting
//    - after fields should come 'submit' button that allow send 'form'
//    - this button should has 'submit' type
//    - to add ability of request sending add 'onClick' event
//    - this event should be equal to expression of 'this' 'submitComment' function
//    - as fields function 'submitComment' also should has 'bind' method with 'this' argument
//    - next we want define this function that also should has 'event' parameter
//    - when we try to click on this button we will see that page is going to refresh
//    - to avoid the page refreshing we have 'preventDefault' method
//    - to apply this method add its to 'event' parameter in body of function
//    - next back to constructor's 'defaultState' object and add new 'id' key that equal to '1' number
//    - again back to body of 'submitComment' function and add 'addComment' method of 'Actions' object
//    - as argument this should takes 'this' 'state'
//    - add console.log of 'this.state' to check actual object
// 7. different comments
//     - go to store file and find 'addComment' function
//     - add aditional condition for creating a comment as key of '_comment' array
//     - this will be looking like this: 'this._comments[comment.id || this._comments.length] = comment
//     - 'this._comments.length' allows add id that will be next after last id
//     - go to browser and try add one more comment throw form
//     - you should get warring that says that your keys must be unique
//     - to avoid this go to fole of 'CommentList' component nad check the returning from 'render' funciton
//     - pay attention that function inside 'map' method take only one 'comment' parameter
//     - let's add second that will be 'i'
//     - also instead of using 'comment.id' as key of 'Comment' component we gonna use our 'i' parameter
//      - now we can add comments without any warring and errors
// 9. input cleaning
//     - after then we entered comment we want taht our fields become clear again
//     - for this we gonna set 'defaultState' that contains keys with empty values
//     - so let's use 'this' 'setState' method with 'this' 'defaultState' argument in 'submitComment' function
//     - this setting should be just after actions that add a comment
class CommentForm extends React.Component {
    constructor() {
        super();
        this.defaultState = { author: "", body: ""};
        this.state = this.defaultState;
    }

    onFieldChange(event) {
        let prop = {};
        prop[event.target.name] = event.target.value;
        this.setState(prop);
        console.log(prop)
    }

    submitComment(event) {
        event.preventDefault();
        Actions.addComment(this.state);
        console.log(this.state);
        this.setState(this.defaultState);
    }

    render() {
        return (
            <form>
            <div className="form-group">
            <label>Author</label>
            <input
        className="form-control"
        type="text"
        name="author"
        value={this.state.author}
        onChange={this.onFieldChange.bind(this)} />
    </div>
        <div className="form-group">
            <label>Content</label>
            <textarea
        className="form-control"
        type="text"
        name="body"
        value={this.state.body}
        onChange={this.onFieldChange.bind(this)} />
    </div>
        <button
        className="btn btn-primary"
        type="submit"
        onClick={this.submitComment.bind(this)}>
        Submit
        </button>
        </form>
    );
    }
}

export default CommentForm;
