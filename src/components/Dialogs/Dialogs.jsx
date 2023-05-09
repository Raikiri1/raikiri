import { Navigate, NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Textarea } from "../common/preloader/FormsControls/FormsControls";
import AddMessageForm, { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";

import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.Dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.Message}>{props.Message}</div>;
};

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let DialogsElements = state.Dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let MessagesElements = state.Messages.map((m) => (
    <Message Message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItems}>{DialogsElements}</div>

      <div className={s.Messages}>
        <div>{MessagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};



export default Dialogs;
