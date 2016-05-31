class CommentList extends React.Component {

    componentDidMount() {
        this.props.store.addChangeListener(this._onChange.bind(this))
    }

    componentWillMount() {
        this.props.store.removeChangeListener(this._onChange.bind(this))
    }

    _onChange() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                {
                    this.props.store.comments().map((comment) => {
                        return (
                            <Comment key={comment.id} {... comment} />
                        );
                    })
                }
            </div>
        )
    }
}

export default CommentList;