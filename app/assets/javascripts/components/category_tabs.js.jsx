const CategoryTabs = React.createClass({
  getInitialState() {
    return {
      key: 'Waste'
    };
  },

  handleSelect(key) {
    this.setState({
      key: key.target.innerHTML,
    });
  },
  //
  // onActiveTab() {
  //   // event.preventDefault();
  // //   this.props.handleSelect();
  // }



  // set selected category to 'class = "active"' | https://codepen.io/amwill/pen/qOMyEp
  render() {
    return (
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

    );
  }
})

// ReactDOM.render(<CategoryTabs />, mountNode);
