import { connect } from 'react-redux';
import InventoryEditor from './components';
import * as Flag from '../../redux/actionFlag';

let AddOrder = function () {
  return {
    type : Flag.ADD_NEW_ORDER
  };
},
  SubmitForm = function(_id) {
    return {
      type : Flag.SUBMIT_ORDER,
      _id : _id
    };
},


  RemoveForm = function(_id) {
    return {
      type : Flag.REMOVE_ORDER,
      _id : _id
    };
},
  InputChange = function (p_order) {
    p_order.type = Flag.EDIT_ORDER;
    return p_order;
};

const mapStateToProps = (state) => {
  return {orders : state.toArray() };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveForm : (_id) => {
      dispatch(RemoveForm(_id))
    },
    onFormSubmit: (_id) => {
      dispatch(SubmitForm(_id))
      dispatch(AddOrder())
    },
    onInputChange : (p_order) => {
      dispatch(InputChange(p_order))
    }
  }
}

const AddOrderListCombine = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryEditor)

export default AddOrderListCombine
