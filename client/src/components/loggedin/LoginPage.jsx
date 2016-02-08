import React from 'react';
// still need to import CreateUserPage and create referenced props...

export default React.createClass({
  render: function() {
    return (
      <div>
        <form>
          Username: <input type="text" name="username"/><br/>
          Password: <input type="password" name="pswd"/>
        </form>
        <div>
          If you have not yet created an account...
        </div>
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.toggleCreatingUsername}>
                {this.props.creatingUsername ? <CreateUserPage /> : null}
        Log In
        </button>
      </div>
    );
  }
});
