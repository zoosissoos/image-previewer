import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { changeLimit } from '../../actions';

const styles = {
  root: {
    width: "20%",
    display: "flex",
    flexDirection:"row",
    alignItems:"center"
  }
}

class LimitSelector extends PureComponent {

  handleLimitChange(value) {
    if(!value || Number.isNaN(value)) {
      this.props.changeLimit(20)
    } else if(value < 1) {
      this.props.changeLimit(1)
    } else {
      this.props.changeLimit(parseInt(value))
    }
  }

  render() {
    const {limit} = this.props
    if(limit) {
      return (
        <div style={styles.root}>
          <Label style={{paddingRight: "5px"}}>Limit:</Label>
          <Input
            value={limit}
            type="number"
            step="1"
            onChange={({target}) => this.handleLimitChange(target.value)}
          />
        </div>
      );
    } else {
          return false
    }
  }
}

function mapStateToProps({userData}) {
  const {limit} = userData;
  return {limit}
}

export default connect(mapStateToProps, {changeLimit})(LimitSelector);
