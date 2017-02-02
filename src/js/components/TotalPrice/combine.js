import { connect } from 'react-redux';
import TotalPrice from './TotalPrice';
import * as Flag from '../../redux/actionFlag';

const mapStateToProps = (state) => {
  return {orders : state.filter((x)=> (
      x.publish === true
  ) ).toArray() };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const TotalPriceCombine = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalPrice)

export default TotalPriceCombine;
