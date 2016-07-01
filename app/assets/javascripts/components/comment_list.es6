import Comment from '/components/comment';
class CommentList extends React.Component {

    static get contextTypes() {
        return {
            store: React.PropTypes.object.isRequired
        }
    }

    componentDidMount() {
        this.context.store.addChangeListener(this._onChange.bind(this))
    }

    componentWillMount() {
        this.context.store.removeChangeListener(this._onChange.bind(this))
    }

    _onChange() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
            {
                this.context.store.comments(this.props.parent_id).map((comment, i) => {
                return (
                    <Comment key={i} {... comment} />
                );
            })
    }
    </div>
    )
    }
}

export default CommentList;