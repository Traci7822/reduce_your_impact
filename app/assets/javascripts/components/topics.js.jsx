const Topics = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    const Topics = this.props.topics.map((topic) => topic.name)
    return (
      <div>
        <div>{Topics.map((topic) => <h2>{topic}</h2>)}</div>
      </div>
    );
  }
});
