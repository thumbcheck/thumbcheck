export default function mapStateToProps(state) {
  return {
    userType: state.get('userType'),
    currentRoom : state.get('currentRoom'),
    voting: state.get('voting'),
    upCount: state.getIn(['tally', 'thumbsUp']),
    downCount: state.getIn(['tally', 'thumbsDown']),
    aCount: state.getIn(['tally', 'a']),
    bCount: state.getIn(['tally', 'b']),
    cCount: state.getIn(['tally', 'c']),
    dCount: state.getIn(['tally', 'd']),
    eCount: state.getIn(['tally', 'e']),
    openResponseAnswers: state.getIn(['tally', 'answers']),
    takingQuestions: state.get('takingQuestions'),
    questions: state.get('questions'),
    haveVoted: state.getIn(['tally', 'haveVoted']),
    handRaised: state.get('handRaised'),
    choice: state.get('choice'),
    id: state.get('id'),
    name: state.get('name'),
    roomName: state.get('roomName'),
    showgraph: state.get('showgraph'),
    errMessage: state.get('errMessage'),
    numUsers: state.get('numUsers'),
    questionType: state.get('questionType'),
    tally: state.get('tally'),
    shareThumbsCheckResults: state.get('shareThumbsCheckResults'),
    // temp
    preplannedPresentation: state.get('preplannedPresentation'),
    educatorLoggedIn : state.get('educatorLoggedIn'),
    editingOrCreatingPresentation: state.get('editingOrCreatingPresentation'),
    // super temp
    currentPresentation: state.get('currentPresentation'),

    toggleTypeMultipleChoice: state.get('toggleTypeMultipleChoice'),
    typeMultipleChoice: state.get('typeMultipleChoice'),
    toggle3choices: state.get('toggle3choices'),
    a3choice: state.get('a3choice'),
    toggle4choices: state.get('toggle4choices'),
    a4choice: state.get('a4choice'),
    toggle5choices: state.get('toggle5choices'),
    a5choice: state.get('a5choice')
  };
}
