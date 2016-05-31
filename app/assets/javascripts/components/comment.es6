class Comment extends React.Component {
    propTypes: {
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
          </div>
        );
    }

}

export default Comment;
