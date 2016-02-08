// GET presentation list for a user
// GET questions for a given presentation
// POST a new question for a given presentation 
// POST a new presentation for a user
// PUT a question in a given presentation 
// PUT an existing presentation
// DELETE a question in a given presentation
// DELETE an existing presentation  

// GET presentation list for an educator
export function getUserPresentations(educatorID) {
  return $.ajax({
      type: 'GET',
      url: '/api/presentations/users/' + educatorID,
    });
}

// GET questions for a given presentation
export function getPresentation(presentationID) {
  $.ajax({
      type: 'GET',
      url: '/api/presentations/' + presentationID,
    })
    .success(function(data) {
      console.log(data);
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('Error: ', qXHR, textStatus, errorThrown);
    });
}

// POST a new question for a given presentation (**Needs to include presentation id and educator id in data**)
export function addPresentationQuestion(questionData) {
  console.log('in ajax call!');
  return $.ajax({
      type: 'POST',
      url: '/api/questions',
      data: questionData
    });
}

// POST a new presentation for a user (**Needs to include educator id in data**)
export function addPresentation(presentationData) {
  return $.ajax({
    type: 'POST',
    url: '/api/presentations',
    data: presentationData,
  });
}

// PUT a question in a given presentation (**Needs to include presentation id and educator id in data**)
export function editPresentationQuestion(questionData) {
  $.ajax({
      type: 'PUT',
      url: /**NEED TO ADD**/'',
      data: questionData
    })
    .success(function(data) {
      console.log(data);
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('Error: ', qXHR, textStatus, errorThrown);
    });
}

// PUT an existing presentation (**Needs to include educator id in data**)
export function editPresentation(presentationData) {
  $.ajax({
      type: 'PUT',
      url: /**NEED TO ADD**/'',
      data: presentationData
    })
    .success(function(data) {
      console.log(data);
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('Error: ', qXHR, textStatus, errorThrown);
    });
}

// DELETE a question in a given presentation
export function deletePresentationQuestion(questionID) {
  $.ajax({
      type: 'DELETE',
      url: /**NEED TO ADD**/'',
    })
    .success(function(data) {
      console.log(data);
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('Error: ', qXHR, textStatus, errorThrown);
    });
}

// DELETE an existing presentation  
export function deletePresentation(presentationID) {
  $.ajax({
      type: 'DELETE',
      url: /**NEED TO ADD**/'',
      data: presentationData
    })
    .success(function(data) {
      console.log(data);
    })
    .error(function(jqXHR, textStatus, errorThrown) {
      console.log('Error: ', qXHR, textStatus, errorThrown);
    });
}
