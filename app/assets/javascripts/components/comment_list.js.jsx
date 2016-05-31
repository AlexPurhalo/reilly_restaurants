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