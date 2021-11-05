import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice.js";

function EmailRow({ id, title, subject, description, time }) {
  //react-router hook to route to the mail on click
  const history = useHistory();
  //history.push("/mail") - pushes the /mail onto the url and when we click back we route back

  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        //passing payload to reducer
        id,
        title,
        subject,
        description,
        time,
      })
    );

    //redirecting to mail route
    history.push("/mail");
  };

  return (
    <div onClick={() => openMail()} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject} -{" "}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
