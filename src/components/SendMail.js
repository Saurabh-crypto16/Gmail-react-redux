import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase.js";
import firebase from "firebase";

//this component renders on compose button click
function SendMail() {
  //react-hook-form lib
  //each input should have a name
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //library function of "react-hook-form"
  //it gets the data of form here
  const onSubmit = (formData) => {
    //getting "emails" collection from db to add object
    db.collection("emails").add({
      //pushing an object in "emails" collection
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //closing form after sending message
    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())} //dispatching action in store
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {/*form validation*/}
        {errors.to && (
          <p className="sendMail__error">Recipient email required!</p>
        )}

        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {/*form validation*/}
        {errors.subject && <p className="sendMail__error">Subject required!</p>}

        <input
          type="text"
          placeholder="Message.."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {/*form validation*/}
        {errors.message && <p className="sendMail__error">Subject required!</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
