var Categories = React.createClass({

  render: function() {
    categories = this.props.categories.map( function(category) {
      return (
      <div>
        <tr>
          <td>{category.name}</td>
        </tr>
      </div>
      );
      });

  }
  })
