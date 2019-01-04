import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { changePage } from '../../actions';


const styles = {
  root: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
  }
}

class PaginationSelector extends PureComponent {

  handlePageChange(value){
    this.props.changePage(value)
  }

  render() {
    const { page } = this.props;
    if(page) {
      const start = parseInt(page) < 3 ? 3 : parseInt(page);
      return (
        <div style={styles.root}>
          <Pagination size="md" aria-label="Pages">
            <PaginationItem active={(page === start - 2)}>
              <PaginationLink href="#" onClick={() => this.handlePageChange(start  - 2)}>
                { start - 2 }
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active={(page === start - 1)}>
              <PaginationLink href="#" onClick={() => this.handlePageChange(start  - 1)}>
                { start - 1 }
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active={(page === start)}>
              <PaginationLink href="#" onClick={() => this.handlePageChange(start)}>
                { start }
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active={(page === start + 1)}>
              <PaginationLink href="#" onClick={() => this.handlePageChange(start + 1)}>
                { start + 1 }
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active={(page === start + 2)}>
              <PaginationLink href="#" onClick={() => this.handlePageChange(start + 2)}>
                { start + 2 }
              </PaginationLink>
            </PaginationItem>
          </Pagination>

        </div>
      );
    } else {
            return false
    }
  }
}


function mapStateToProps({userData}) {
  const { page } = userData;
  return { page }
}

export default connect(mapStateToProps, { changePage })(PaginationSelector);
