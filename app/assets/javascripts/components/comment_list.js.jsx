//                      Component Structure
// 1. Define CommentList class inherited from React class
// 2. Render JSX
// 3. In JSX iterate throw "comments" array with map method
// 4. Contain function with "comment" parameter as argument of map method
// 5. Return "Comment" component
// 6. Contain "author", "body" and "rank" properties to "Comment" component
// 7. Make recently declared properties equal to suitable key of "comment" object, example: "body={comment.body}"
// 8. Add "key" property to "Comment" component and make it equal to "comment" object's "id" key
// 9. Make code clearly. Use shortcut expressions declaring. Example: "{ ... comment }"

//                      Component Lifecycle
// 1. add "componentDidMount" function that contains
//    "Store" with "addChangeListener" method that takes
//    "this" "_onChange" function as argument
// 2. declare "_onChange" function that contains
//    "this" "forceUpdate" method
// 3. add "componentWillMount" function that contains
//    "Store" with "removeChangeListener" method that takes
//    "this" "_onChange" function as argument
// 4. add some text to "console.log" to check that constructor is work

//              Actions adding
//    Go to CommentList component instead of empty array add "Store.comments()" function to map elements
//       - console: Actions.addComment({id: 1, author: "Alex", body: "hey, it works", rank: 9})
//       - rendering: jsx following CommentList's structure
//       - make as comment "console.log("rendering") in render function
var CommentList = React.createClass({

    componentDidMount: function() {
        Store.addChangeListener(this._onChange)
    },

    componentWillMount: function() {
        Store.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.forceUpdate();
    },

    render: function() {
        // console.log('hey, our flux building is works fine');
        // console.log("rendering");
        return (
            <div>
                {
                    Store.comments().map(function(comment) {
                        return (
                            <Comment key={comment.id} {... comment} /> // same as code bellow
                            // <Comment
                            //     key={comment.id}
                            //     author={comment.author}
                            //     body={comment.body}
                            //     rank={comment.rank} />
                        );
                    })
                }
            </div>
        );
    }
});