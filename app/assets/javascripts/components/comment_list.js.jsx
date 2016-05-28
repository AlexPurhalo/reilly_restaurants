// 1. Define CommentList class inherited from React class
// 2. Render JSX
// 3. In JSX iterate throw "comments" array with map method
// 4. Contain function with "comment" parameter as argument of map method
// 5. Return "Comment" component
// 6. Contain "author", "body" and "rank" properties to "Comment" component
// 7. Make recently declared properties equal to suitable key of "comment" object, example: "body={comment.body}"
// 8. Add "key" property to "Comment" component and make it equal to "comment" object's "id" key
// 9. Make code clearly. Use shortcut expressions declaring. Example: "{ ... comment }"
var CommentList = React.createClass({
    render: function() {
        return (
            <div>
                {
                    JSON.parse(this.props.comments).map(function(comment) {
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