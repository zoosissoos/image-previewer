import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {fetchImages} from "../actions";
import ImageCard from './ImageCard/ImageCard';

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

class ImageGrid extends PureComponent {

  componentDidMount() {
    const { page, limit, } = this.props;
    this.props.fetchImages(page, limit)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { page, limit } = this.props;
    if(prevProps.limit !== limit || prevProps.page !== page) {
      this.props.fetchImages(page, limit)
    }
  }

  renderImageCards(){
    const {data} = this.props;
    return (
      data.map((each)=>{
        const {id, albumId} = each;
        return <ImageCard key={`${id}${albumId}`} identifier={`${id}${albumId}`} {...each} />
      })
    )
  }

  render() {
    const { isLoading, err, data} = this.props;
    if(err && !isLoading) {
      return (
        <div>
          Err
        </div>
      )
    } else if (data && !err){
      return (
        <div style={styles.root}>
          {this.renderImageCards()}
        </div>
      );
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }
}

function mapStateToProps ({ imageData, userData }) {
  const { page, limit } = userData;
  const { isLoading, err, data} = imageData;
  return { isLoading, err, data , page, limit}
}


export default connect(mapStateToProps, {fetchImages})(ImageGrid);