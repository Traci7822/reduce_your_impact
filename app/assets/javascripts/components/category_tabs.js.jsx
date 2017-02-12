const CategoryTabs = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    this.setState({key});
  },

  // set selected category to 'class = "active"'
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {this.props.categories.map(
            (category) =>
              <li role="presentation">
                <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
                  {category.name}
                </a>
              </li>
            )}
        </ul>
      </div>

    );
  }
})

// ReactDOM.render(<CategoryTabs />, mountNode);