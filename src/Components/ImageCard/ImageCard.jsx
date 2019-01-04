import React, {memo} from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import FavoriteButton from './FavoriteButton';

const styles = {
  root: {
    width:"25%",
    padding:".5rem"
  },
  text: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
}

const ImageCard = ({title, url, thumbnailUrl, identifier}) => {
  return (
    <div style={styles.root}>
      <Card>
        <CardImg top width="100%" src={thumbnailUrl} alt="Image Preview" />
        <CardBody>
          <CardText style={styles.text}>{title}</CardText>
          <FavoriteButton id={identifier}/>
        </CardBody>
      </Card>
    </div>
  );
};

export default memo(ImageCard);