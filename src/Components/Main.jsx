import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import MailCard from "./MailCard";
import { AddData } from "../Redux/Action";
import Getmails from "../API/Getmails";
import GetMailsBody from "../API/GetMailsBody";
const Main = () => {
  const [flag, setFlag] = useState(false);
  const [mailid, setMailid] = useState(null);
  const dispatch = useDispatch();
  const store = useSelector((store) => store.data);

  useEffect(() => {
    Getmails().then((res) => {
      dispatch(AddData(res.list));
    });
  }, []);

  console.log(store);

  const style = {
    width: "300px",
  };
  const style2 = {
    width: "80%",
  };

  useEffect(() => {
    GetMailsBody(mailid).then((res) => {
      console.log(res);
    });
    console.log(mailid, "done");
  }, [mailid]);

  const handleClick = (id) => {
    setFlag(true);
    // console.log(el);
    setMailid(id);
    console.log(id);
  };
  return (
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
  );
};

export default Main;
