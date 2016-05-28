// 1. Create first component named "Comment"
var Comment = React.createClass({
// 2. Declare properties that we expect
    propTypes: {
        author: React.PropTypes.string,
        body: React.PropTypes.string,
        rank: React.PropTypes.number
    },
// 3. Render JSX with properties from view file
    render: function() {
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

});