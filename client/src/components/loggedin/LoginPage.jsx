import React from 'react';
// still need to import CreateUserPage and create referenced props...

export default React.createClass({
  handleLogin: function () {
    const username = this.usernameInput.value.toLowerCase();
    const password= this.passwordInput.value.toLowerCase();
    const that = this;

    console.log(username, password);
    if (!username || !password) {
      this.props.setError('Please enter a username or password.');
    } else {
      $.ajax({
        type: 'POST',
        url: '/login',
        dataType: "json",
        data: {
          username: username,
          password: password
        }
      })
      .success(function(data) {
        if(data.found === 1) {
          console.log('User Found. Trigger Login')
          that.props.educatorLogin(username);
          window.location.assign(username+'?type=host');
        } else {
          that.props.setError('Invalid username or password. Please try again.');
        }
      });
    }
  },

  handleEnter: function (e){
    if (e.keyCode == 13){
      this.handleLogin(e);
    }
  },

  render: function() {
    return (
      <div>
        <p>Log in to your account</p>
        <label>Username:</label><input type="text" name="username" ref={(ref) => this.usernameInput = ref} onKeyDown ={this.handleEnter} /><br/>
        <label>Password:</label><input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} onKeyDown ={this.handleEnter} /><br/>
        <p>{this.props.errMessage}</p>
        <a className="btn btn-primary btn-md" role="button" onClick={this.handleLogin} >Log In</a>
      </div>
    );
  }
});
