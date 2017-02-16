const CategoryTabs = React.createClass({

  getInitialState() {
    return {
      key: 'Waste',
      active: false,
    };
  },

  handleSelect(key) {
    this.setState({
      key: key.target.innerHTML,
      active: true,
    });
  },

  render() {
    return (
      <div>
        <div>
          <ul className="nav nav-tabs" role="tablist">
            {this.props.categories.map(
              (category) =>
                <li role="presentation" key={category.id}>
                  <a href="#profile" className={this.state.key} aria-controls="profile" role="tab" data-toggle="tab" onClick={this.handleSelect} >
                    {category.name}
                  </a>
                </li>
              )}
            </ul>

            </div>
            <div>
              {this.state.active ? `${this.state.key} + active` : null}
            </div>
      </div>

    );
  }
})

// ReactDOM.render(<CategoryTabs />, mountNode);
