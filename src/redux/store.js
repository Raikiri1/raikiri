import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer ";


let store = {
  _state: {

    profilePage: {
      Posts: [
        { id: 1, message: 'Hi, how are you', Likescaunt: 12 },
        { id: 2, message: 'It\'s my first post', Likescaunt: 11 },
        { id: 2, message: 'Blala', Likescaunt: 13 },
        { id: 2, message: 'Dadada', Likescaunt: 14 },
      ],
      newPostText: 'raikiri'
    },
    dialogsPage: {
      Dialogs: [
        { id: 1, name: 'Dmytri' },
        { id: 2, name: 'Artem' },
        { id: 3, name: 'Roman' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Elena' },
        { id: 6, name: 'Vika' }
      ],
      Messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am ok' },
        { id: 4, message: 'YO' },
        { id: 5, message: 'YO' },
        { id: 6, message: 'YO' }
      ],
      newMessageBody:""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State  changed')
  },

  getState() { return this._state; },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);

    
  }
}







export default store;