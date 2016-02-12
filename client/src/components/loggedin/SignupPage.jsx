import React from 'react';
// still need to import CreateUserPage and create referenced props...

export default React.createClass({
  handleLogin: function () {
    const name = this.nameInput.value.toLowerCase();
    const email = this.emailInput.value.toLowerCase();
    const username = this.usernameInput.value.toLowerCase();
    const password = this.passwordInput.value.toLowerCase();

    let that = this;
    console.log(username, password);


    if (!name || !email || !username || !password) {
      console.log('All fields must be filled in.')
      this.props.setError('All fields must be filled in.');
    } else if (username === 'room' || username=== 'login' || username=== 'logout') {
      this.props.setError('Username already taken. Please choose a new one.');
    } else {
      $.ajax({
        type: 'POST',
        url: '/api/users',
        dataType: "json",
        data: {
          name: name,
          email: email,
          username: username,
          password: password
        }
      })
      .success(function(data) {
        console.log('data from db & server', data);
        if(data.status =='taken'){
          that.props.setError('Username already taken. Please choose a new one.');
        } else {
          that.props.educatorLogin(username);
          window.location.assign(username+'?type=host');
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
    if(this.props.isMobile){
      return(
        <div>
          <p>Sign up for an account</p>
          <input type="text" name="name" ref={(ref) => this.nameInput = ref} onKeyDown ={this.handleEnter} placeholder="Name" /><br/>
          <input type="text" name="email" ref={(ref) => this.emailInput = ref} onKeyDown ={this.handleEnter} placeholder="Email" /><br/>
          <input type="text" name="username" ref={(ref) => this.usernameInput = ref} onKeyDown ={this.handleEnter} placeholder="Username" /><br/>
          <input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} onKeyDown ={this.handleEnter} placeholder="Username" /><br/>
          <p>{this.props.errMessage}</p>
          <a className="btn btn-primary btn-md btn-small-screen" role="button" onClick={this.handleLogin} onKeyDown ={this.handleEnter} >Sign Up</a>
        </div>
      )
    } else {
      return (
        <div>
          <table className="signup">
            <tbody>
              <tr>
                <td colSpan="2"><p>Sign up for an account</p></td>
              </tr>
              <tr>
                <td>Name:</td><td><input type="text" name="name" ref={(ref) => this.nameInput = ref} onKeyDown ={this.handleEnter} /><br/></td>
              </tr>
              <tr>
                <td>Email:</td><td><input type="text" name="email" ref={(ref) => this.emailInput = ref} onKeyDown ={this.handleEnter} /><br/></td>
              </tr>
              <tr>
                <td>Username:</td><td><input type="text" name="username" ref={(ref) => this.usernameInput = ref} onKeyDown ={this.handleEnter} /><br/></td>
              </tr>
              <tr>
                <td>Password:</td><td><input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} onKeyDown ={this.handleEnter} /><br/></td>
              </tr>
              <tr>
                <td></td><td><a className="btn btn-primary btn-md btn-small-screen" role="button" onClick={this.handleLogin} onKeyDown ={this.handleEnter} >Sign Up</a></td>
              </tr>
            </tbody>
          </table>
          <p>{this.props.errMessage}</p>
        </div>
      );
    }
  }
});
