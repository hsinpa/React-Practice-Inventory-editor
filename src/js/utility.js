
export let AssignValue = function(p_object, p_default = "") {
  return (p_object ==null || p_object == undefined) ? p_default : p_object;
}

export let GenerateRandomID = function() {
  return Math.random().toString(36).substring(7);
}

export let FindOrderByID = function (p_states, _id) {
  return p_states.findIndex((x) => (
      x._id == _id
    ));
}

export let UpdateStates = function (p_states, _id, p_key, p_value) {
  let index = FindOrderByID( p_states, _id );
  return p_states.update(index, (x)=> (
    Object.assign({}, x, {[p_key]: p_value})
  ));
}

export let RemoveOrder = function (p_states, _id) {
  let index = FindOrderByID( p_states, _id );

  return p_states.delete(index);
}

export let GenerateEmptyOrder = function () {
  return {
    name : "",
    price : 0,
    freshness : "fresh",
    description : "",
    publish : false,
    _id : GenerateRandomID()
  };
}
