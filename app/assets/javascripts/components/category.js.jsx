const Categories = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    const Categories = this.props.categories.map((category) => category.name)
    return (
      <div>
        <div>{Categories.map((category) => <h2>{category}</h2>)}</div>
      </div>
    );
  }
});
