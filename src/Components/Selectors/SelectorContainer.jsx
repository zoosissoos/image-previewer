import React, {memo} from 'react';
import PaginationSelector from "./PaginationSelector";
import LimitSelector from './LimitSelector';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  }
}


const SelectorContainer = () => {
  return (
    <div style={styles.root}>
      <LimitSelector />
      <PaginationSelector />
    </div>
  );
};

export default memo(SelectorContainer);