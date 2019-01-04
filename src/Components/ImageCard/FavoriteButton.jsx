import React, {PureComponent} from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { changeFavorites } from '../../actions';

const styles = {
  selected : {
    backgroundColor: "green"
  },
  notSelected: {
    backgroundColor: "grey"
  }
}

class FavoriteButton extends PureComponent {

  handleFavorite(value) {
    const {favorites} = this.props;
    if(favorites.includes(value)) {
      let newFav = [...favorites]
      newFav.splice( favorites.indexOf(value), 1 );
      this.props.changeFavorites(newFav);
    } else {
      let newFav = [...favorites, value];
      this.props.changeFavorites(newFav);
    }
  }

  render() {
    const { favorites, id } = this.props;
    return (
      <Button
        size="sm"
        style={ favorites.includes(id) ? styles.selected : styles.notSelected }
        onClick={() => this.handleFavorite(id)}
      >
        Favorite
      </Button>
    )
  }
}

function mapStateToProps({userData}) {
    const {favorites } = userData;
    return {favorites}
}

export default connect(mapStateToProps, {changeFavorites})(FavoriteButton);