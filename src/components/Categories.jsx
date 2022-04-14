import React from "react";
import PropTypes from "prop-types";
/*class Categories extends React.Component {
  state = {
    activeItem: 3,
  };

  onSelectItem = (index) => {
    this.setState({
      activeItem: index,
    });
  };
  render() {
    const { items, onClickItem } = this.props;
    return (
      <div className="categories">
        <ul>
          <li>Все</li>

          {items.map((name, index) => (
            <li
              className={this.state.activeItem === index ? "active" : ""}
              onClick={() => this.onSelectItem(index)}
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}*/

function Categories({activeCategory, items, onClickCategory}) {
//const [activeItem, setActiveItem] = React.useState(null);

const onSelectItem = (index) => {
    //setActiveItem(index);
    onClickCategory(index);
}
    return (
        <div className="categories">
              <ul>
                <li className={activeCategory === null ? "active" : ""} onClickCategory={()=> onSelectItem(null)} >Все</li>
            
            {
                items.map((name, index) => (
                <li className={activeCategory === index ? "active" : ""}
                 onClick= {() => onClickCategory(index)} key={name}>{name}</li>)
                )
            }
      
              </ul>
            </div> 
    );
}

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number,null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
    activeCategory : null,
    items : [],
};

export default Categories;
