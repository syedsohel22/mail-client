import React from "react";
import "../Styles/mailBody.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const MailBody = ({ mailBody, id }) => {
  const [name, setName] = useState("");
  const [mydate, setDate] = useState(0);

  const store = useSelector((store) => store.data);
  useEffect(() => {
    const user = store.filter((el) => el.id === id);
    console.log("id=>", id);
    // console.log("uaser", user[0]);
    // if()
    //     setName(user[0].from.name);
    //     setDate(user[0].date);
  }, [store, id]);

  return (
    <div className="mail-body">
      <div>
        <p>From: {name}</p>
        <p>{mydate}</p>
        <button className="mark-fev">mark as favorate</button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: mailBody }}></div>
    </div>
  );
};

export default MailBody;
