import React from 'react';

export function LoginPanel() {
  const randomValue = {email : "", password : ""};

  var onSubmitForm = function(e) {
    e.preventDefault();
    randomValue[e.target.name] = e.target.value;
  }, onhandleChange = function(e) {
    randomValue[e.target.name] = e.target.value;
  }

  return (
    <form onSubmit={ onSubmitForm }>
      <input type="text" name="email" onChange={ onhandleChange } placeholder="Type Email . . ."></input><br></br>
      <input type="password" name="password" onChange={ onhandleChange } placeholder="Type Password . . ."></input><br></br>
      <input type="submit" value="Submit"></input>
    </form>
  );
}
