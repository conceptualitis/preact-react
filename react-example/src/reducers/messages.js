// import { CURRENT_USER_RECEIVE } from 'app/actions/current-user';

const initialState = [
  {
    title: 'Hello friend',
    from: 'Bob',
    body: 'It was great seeing you again!'
  }
];

export default function update(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
