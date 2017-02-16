const CategoryTabs = React.createClass({

  getInitialState() {
    return {
      name: 'Waste',
      active: false,
      topics: []
    };
  },


  handleSelect(event) {
    const topics = this.getTopics;
    // need to write getTopics to get topics by category id. Use actions folder with index.js file?
    this.setState({
      id: event.target.id,
      name: event.target.innerHTML,
      active: true,
      topics: topics,
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
                  <a href="#profile" id={category.id} className={this.state.key} aria-controls="profile" role="tab" data-toggle="tab" onClick={this.handleSelect} >
                    {category.name}
                  </a>
                </li>
              )}
            </ul>

            </div>
            <div>
              {this.state.active ? `${this.state.name} + active` : null}
              {this.state.topics}
            </div>
      </div>

    );
  }
})

// ReactDOM.render(<CategoryTabs />, mountNode);
