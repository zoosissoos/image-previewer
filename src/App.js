import React, { memo } from 'react';
import ImagesContainer from "./Components/ImagesContainer";
import Title from "./Components/Title";


const styles = {
  root: {
    padding: "2.5rem",
  }
};


const App = () => {
  return (
    <div style={styles.root}>
      <Title/>
      <ImagesContainer />
    </div>
  );
}


export default memo(App);
