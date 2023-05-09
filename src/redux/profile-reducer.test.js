
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
  Posts: [
    { id: 1, message: 'Hi, how are you', Likescaunt: 12 },
    { id: 2, message: 'It\'s my first post', Likescaunt: 11 },
    { id: 2, message: 'Blala', Likescaunt: 13 },
    { id: 2, message: 'Dadada', Likescaunt: 14 },
  ]
};

test('length of posts should be incremented', () => {
  // 1.test data
  let action = addPostActionCreator("it-kamasutra.com");
  
  // 2. action
  let newState = profileReducer({state},{action});

  // 3.expactation
  expect(newState.Posts.length).toBe(5);
});
test('message of new post should be correct', () => {
  // 1.test data
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer({state},{action});

  // 3.expactation
  expect(newState.Posts[4].message).toBe("it-kamasutra.com");
});
test('after deleting length of messages should be decrement', () => {
  // 1.test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer({state},{action});

  // 3.expactation
  expect(newState.Posts[4].length).toBe(3);
});

 
