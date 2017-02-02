import { connect } from 'react-redux';
import DisplayOrderList from './components';
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

const DisplayOrderListCombine = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayOrderList)

export default DisplayOrderListCombine;
