import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class UserFavorites extends PureComponent {
  render() {
    const { favorites } = this.props
    return (
      <div>
        <h5> Favorite Count: { favorites.length }</h5>
      </div>
    );
  }
}

function mapStateToProps({userData}) {
  const {favorites } = userData;
  return {favorites}
}

export default connect(mapStateToProps)(UserFavorites);