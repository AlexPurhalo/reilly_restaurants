class CommentForm extends React.Component {
    static get contextTypes() {
        return {
            actions: React.PropTypes.object.isRequired
        }
    }

    static get PropTypes() {
        return {
            onCommentSubmitted: React.PropTypes.func,
            isReplying: React.PropTypes.bool,
            parent_id: React.PropTypes.number
        }
    }

    constructor(props) {
        super();
        this.defaultState = { author: "", body: ""};
        this.state = this.defaultState;
        this.state.isReplying = props.isReplying || false
    }

    onFieldChange(event) {
        let prop = {};
        prop[event.target.name] = event.target.value;
        this.setState(prop);
    }

    submitComment(event) {
        event.preventDefault();
        this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }));
        this.setState(this.defaultState);
        if (this.props.onCommentSubmitted) {
            this.props.onCommentSubmitted();
        }
    }

    render() {
        return ( <div>
            <form className={this.props.isReplying ? '' : 'hide'}>
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
            </div>
    );
    }
}

export default CommentForm;
