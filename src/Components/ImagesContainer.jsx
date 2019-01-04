import React, {memo} from 'react';

import { Card } from 'reactstrap';
import ImageGrid from './ImageGrid';
import SelectorContainer from './Selectors/SelectorContainer';

const styles = {
  root: {
    padding: "1rem"
  }
};

const ImagesContainer = () => {
  return (
    <Card style={styles.root}>
      <SelectorContainer />
      <ImageGrid />
    </Card>
  );
}


export default memo(ImagesContainer);