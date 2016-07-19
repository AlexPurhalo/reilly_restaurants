import React from 'react';

class CommentForm extends React.Component {
    static get propTypes() {
        return {
            addComment: React.PropTypes.func.isRequired,
            isReplying: React.PropTypes.bool,
            onCommentSubmitted: React.PropTypes.func,
            parent_id: React.PropTypes.number
        }
    }

    constructor(props) {
        super()
        this.defaultState = { body: '', author: '' };
        this.state = this.defaultState;
    }

    submitComment(event) {
        event.preventDefault()
        this.props.addComment(this.props.restaurantId, _.merge(this.state, {parent_id: this.props.parent_id}));
        this.setState(this.defaultState);
        if (this.props.onCommentSubmitted) {
            this.props.onCommentSubmitted();
        }
    }

    onFieldChange(event) {
        let prop = {}
        prop[event.target.name] = event.target.value;
        this.setState(prop)
    }

    render() {
        return (
            <div>
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
