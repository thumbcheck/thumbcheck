import React from 'react';
// still need to import CreateUserPage and create referenced props...

export default React.createClass({
  handleLogin: function () {
    const name = this.nameInput.value.toLowerCase();
    const email = this.emailInput.value.toLowerCase();
    const username = this.usernameInput.value.toLowerCase();
    const password = this.passwordInput.value.toLowerCase();

    console.log(username, password);
    if (!name || !email || !username || !password) {
      console.log('All fields must be filled in.')
      //this.props.setError('All fields must be filled in.');
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
      });
    }

  },

  render: function() {
    return (
      <div>
        <h2>Sign up for an account</h2>
        <p>{this.props.errMessage}</p>
          Name: <input type="text" name="name" ref={(ref) => this.nameInput = ref} /><br/>
          Email: <input type="text" name="email" ref={(ref) => this.emailInput = ref} /><br/>
          Username: <input type="text" name="username" ref={(ref) => this.usernameInput = ref} /><br/>
          Password: <input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} /><br/>
          <a className="btn btn-primary btn-md" role="button" onClick={this.handleLogin} >Sign Up</a>
      </div>
    );
  }
});
