import uuid from 'uuid';

export default function generateID() {
  let id = localStorage.getItem('participantID');
  if (!id) {
    id = uuid.v4();
    localStorage.setItem('participantID', id);
    console.log('id!', id);
  }
  return id;
}
