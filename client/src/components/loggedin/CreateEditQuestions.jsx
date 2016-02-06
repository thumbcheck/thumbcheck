import React from 'react';

// When user selects multiple choice, we could determine the number of responses based
// on the number that they fill in...

export default React.createClass({
  chooseThumbCheck: function () {
// fill this in
  },
  chooseMultipleChoice: function() {
    console.log("this is GREAT!!!");
    this.props.toggleTypeMultipleChoice();
  },
  chooseOpenResponse: function() {
// fill this in
  },
  choose3choices: function() {
    this.props.toggle3choices();
  },
  choose4choices: function() {
    this.props.toggle4choices();
  },
  choose5choices: function() {
    this.props.toggle5choices();
  },
  render: function() {
    return (
      <div>
        <div>
          <span>Question: </span>
          <input type="text" name="question" />
        </div>
        <div>
          <span>Response Type: </span>
          <button onClick={this.chooseThumbCheck}>Thumbcheck</button>
          <button onClick={this.chooseMultipleChoice}>Multiple Choice</button>
          <button onClick={this.chooseOpenResponse}>Open Response</button>
        </div>

        {this.props.typeMultipleChoice ?
         <div> 
          <button onClick={this.choose3choices}>A-B-C</button>
          <button onClick={this.choose4choices}>A-B-C-D</button>
          <button onClick={this.choose5choices}>A-B-C-D-E</button>
          </div> :
         null}
        
        {this.props.a3choice ?
         <div> 
          <div>
            <span>A: </span>
            <input type="text" name="Aans" />
          </div>
          <div>
            <span>B: </span>
            <input type="text" name="Bans" />
          </div>
          <div>
            <span>C: </span>
            <input type="text" name="Cans" />
          </div>
          </div> :
         null}

        {this.props.a4choice ?
        <div>
          <div>
            <span>A: </span>
            <input type="text" name="Aans" />
          </div>
          <div>
            <span>B: </span>
            <input type="text" name="Bans" />
          </div>
          <div>
            <span>C: </span>
            <input type="text" name="Cans" />
          </div>
          <div>
            <span>D: </span>
            <input type="text" name="Dans" />
          </div>
        </div> :
         null}
        
        {this.props.a5choice ?
        <div>
          <div>
            <span>A: </span>
            <input type="text" name="Aans" />
          </div>
          <div>
            <span>B: </span>
            <input type="text" name="Bans" />
          </div>
          <div>
            <span>C: </span>
            <input type="text" name="Cans" />
          </div>
          <div>
            <span>D: </span>
            <input type="text" name="Dans" />
          </div>
          <div>
            <span>E: </span>
            <input type="text" name="Eans" />
          </div>
        </div> :
         null}
        <button>
          Save
        </button>

      </div>
    );
  }
});
