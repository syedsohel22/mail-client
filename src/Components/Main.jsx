import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import MailBody from "./MailBody";
import MailCard from "./MailCard";
import { AddData } from "../Redux/Action";
import Getmails from "../API/Getmails";
import GetMailsBody from "../API/GetMailsBody";
import "../Styles/Main.css";
const Main = () => {
  const [flag, setFlag] = useState(false);
  const [mailid, setMailid] = useState(null);
  const [mailBody, setMailBody] = useState({});
  const dispatch = useDispatch();
  const store = useSelector((store) => store.data);

  useEffect(() => {
    Getmails().then((res) => {
      dispatch(AddData(res.list));
    });
  }, [dispatch]);

  console.log(mailBody);

  const style = {
    width: "400px",
    alignItems: "center",
  };
  const style2 = {
    width: "80%",
    margin: "auto",
  };

  useEffect(() => {
    GetMailsBody(mailid).then((res) => {
      setMailBody(res);
    });
    console.log(mailid, "done");
    console.log(mailBody);
  }, [mailid]);

  const handleClick = (id) => {
    setFlag(true);

    setMailid(id);
    console.log(id);
  };

  return (
    <div className="outer-container">
      <div className="container" style={flag === true ? style : style2}>
        {store?.map((el) => (
          <MailCard
            name={el.from.name}
            key={el.id}
            id={el.id}
            email={el.from.email}
            date={el.date}
            subject={el.subject}
            short_description={el.short_description}
            handleClick={handleClick}
            mailid={mailid}
          />
        ))}
      </div>
      {flag ? (
        <MailBody mailBody={mailBody.body} id={mailBody.id} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Main;
