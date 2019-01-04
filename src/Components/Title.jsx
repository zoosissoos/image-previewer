import React, {memo}  from 'react';
import UserFavorites from './UserFavorites';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

const Title = () => {
  return (
    <div style={styles.root}>
      <h1>Image Picker</h1>
      <UserFavorites />
    </div>
  );
};

export default memo(Title);