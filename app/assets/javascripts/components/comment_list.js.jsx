//               Restructuring to ES6
// 9.  in JSX rendering rewrite "Store" to "commentStore"
// 10. do the same for "Store" in functions bodies under "render" function
//     check result in browser, adding of objects to Store throw console still should worls
var CommentList = React.createClass({

    componentDidMount: function() {
        commentStore.addChangeListener(this._onChange)
    },

    componentWillMount: function() {
        commentStore.removeChangeListener(this._onChange)
    },

    _onChange: function() {
        this.forceUpdate();
    },

    render: function() {
        return (
            <div>
                {
                    commentStore.comments().map(function(comment) {
                        return (
                            <Comment key={comment.id} {... comment} />
                        );
                    })
                }
            </div>
        );
    }
});