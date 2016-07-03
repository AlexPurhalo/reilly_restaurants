import CommentForm from './comment_form';
import CommentList from './comment_list';

class Comment extends React.Component {
    static get contextTypes() {
        return {
            actions: React.PropTypes.func.isRequired
        }
    }

    propTypes: {
        id: React.PropTypes.number,
        author: React.PropTypes.string,
        body: React.PropTypes.string,
        rank: React.PropTypes.number
    };

    constructor() {
        super();

        this.state = { isReplying: false }
    }

    onToggleReply() {
        this.setState({isReplying: !this.state.isReplying})
    }

    onCommentSubmitted(event) {
        this.setState({isReplying: false})
    }

    onUpvote(event) {
        this.context.actions.upvoteComment(this.props)
    }

    render() {
        const replyText = this.state.isReplying ? 'Hide' : 'Reply';
        return (
          <li>
          <div className="comment">
              <ul>
                  <li>
                      <h5>{this.props.author}</h5>
                  </li>
                  <li>
                      <span className="badge">{this.props.rank}</span>
                  </li>
              </ul>
              <p>{this.props.body}</p>
              <button
                className="btn btn-default"
                onClick={this.onToggleReply.bind(this)}f>
                {replyText}</button>
              <button
                onClick={this.onUpvote.bind(this)}>+!</button>
              <CommentForm
                parent_id={this.props.id}
                isReplying={this.state.isReplying}
                onCommentSubmitted={this.onCommentSubmitted.bind(this)} />
              <CommentList parent_id={this.props.id} />
          </div>
          </li>
        );
    }

}

export default Comment;
