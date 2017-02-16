const Categories = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    id: React.PropTypes.number
  },

  render: function() {
    const Categories = this.props.categories.map((category) => category)
    return (
      <div>
        <div>{Categories.map((category) => <h2>{category}</h2>)}</div>
      </div>
    );
  }
});
