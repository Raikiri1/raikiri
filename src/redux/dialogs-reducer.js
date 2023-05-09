const SEND_MESSAGE = "SEND_MESSAGE";


let initialState = {
  Dialogs: [
    { id: 1, name: "Dmytri" },
    { id: 2, name: "Artem" },
    { id: 3, name: "Roman" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Elena" },
    { id: 6, name: "Vika" },
  ],
  Messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am ok" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        Messages: [...state.Messages, { id: 7, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
