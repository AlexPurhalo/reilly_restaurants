class CommentForm extends React.Component {
    static get contextTypes() {
        return {
            actions: React.PropTypes.func.isRequired
        }
    }

    constructor() {
        super();
        this.defaultState = { author: "", body: ""};
        this.state = this.defaultState;
    }

    onFieldChange(event) {
        let prop = {};
        prop[event.target.name] = event.target.value;
        this.setState(prop);
        // console.log(prop)
    }

    submitComment(event) {
        event.preventDefault();
        this.context.actions.addComment(_.merge(this.state, { parent_id: this.props.parent_id }));
        // console.log(this.state);
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
