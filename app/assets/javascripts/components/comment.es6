import CommentForm from './comment_form';
class Comment extends React.Component {
    propTypes: {
        id: React.PropTypes.number,
        author: React.PropTypes.string,
        body: React.PropTypes.string,
        rank: React.PropTypes.number
    };

    render() {
        return (
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
              <CommentForm parent_id={this.props.id}/>
          </div>
        );
    }

}

export default Comment;
