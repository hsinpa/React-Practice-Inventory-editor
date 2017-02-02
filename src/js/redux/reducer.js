import {List} from 'immutable';
import { GenerateEmptyOrder, UpdateStates, RemoveOrder } from '../utility';
import * as Flag from './actionFlag';

var initState = () => {
  return List().push( GenerateEmptyOrder() );
}

export default function( states = initState(), action ) {
    switch (action.type) {
        case Flag.ADD_NEW_ORDER :
          return states.push( GenerateEmptyOrder() );
        break;

        case Flag.SUBMIT_ORDER :
          return UpdateStates( states, action._id, "publish", true  );
        break;

        case Flag.EDIT_ORDER :
          return UpdateStates( states, action._id, action.name, action.value  );
        break;

        case Flag.REMOVE_ORDER :
          return RemoveOrder( states, action._id );
        break;
    }

    return states;
}
