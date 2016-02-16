import React from 'react';
// still need to import CreateUserPage and create referenced props...

export default React.createClass({
  handleLogin: function () {
    const username = this.usernameInput.value.toLowerCase();
    const password= this.passwordInput.value.toLowerCase();
    const that = this;
    
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
    if(this.props.isMobile) {
      return (
        <div>
          <p>Log in to your account</p>
          <table className="login">
            <tbody>
              <tr>
                <td><input type="text" name="username" ref={(ref) => this.usernameInput = ref} onKeyDown ={this.handleEnter} placeholder="Username" /><br/></td>
              </tr>
              <tr>
                <td><input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} onKeyDown ={this.handleEnter} placeholder="Password" /><br/></td>
              </tr>
              <tr>
                <td><a className="btn btn-primary btn-md btn-small-screen" role="button" onClick={this.handleLogin} >Log In</a></td>
              </tr>
            </tbody>
          </table>
          <p>{this.props.errMessage}</p>
        </div>
      )
    } else {
      return (
        <div>
        <table>
          <tbody>
            <tr>
              <td colSpan="2"><p>Log in to your account</p></td>
            </tr>
            <tr>
              <td className="login">Username:</td><td><input type="text" name="username" ref={(ref) => this.usernameInput = ref} onKeyDown ={this.handleEnter} /><br/></td>
            </tr>
            <tr>
              <td>Password:</td><td><input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} onKeyDown ={this.handleEnter} /><br/></td>
            </tr>
            <tr>
              <td></td><td><a className="btn btn-primary btn-md btn-small-screen" role="button" onClick={this.handleLogin} >Log In</a></td>
            </tr>
          </tbody>
        </table>
          <p>{this.props.errMessage}</p>
          <p><a onClick={this.props.chooseSignup}>Don&#39;t have an account yet? </a></p>
        </div>
      );
    }
  }
});
