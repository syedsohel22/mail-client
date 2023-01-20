import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { AddData } from ".../Redux/Action";
import MailCard from "./MailCard";
import { AddData } from "../Redux/Action";
const Main = () => {
  const [flag, setFlag] = useState(false);

  console.log("flag-inside main");

  const dispatch = useDispatch();
  const store = useSelector((store) => store.data);
  console.log("store", store);
  useEffect(() => {
    fetch(`https://flipkart-email-mock.now.sh/`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(AddData(res.list));
        //  console.log(res.list);
      });
  }, []);

  const style = {
    width: "300px",
  };
  const style2 = {
    width: "80%",
  };

  return (
    <div
      className="container"
      onClick={() => {
        setFlag(true);
      }}
      style={flag === true ? style : style2}
    >
      {store?.map((el) => (
        <MailCard
          name={el.from.name}
          key={el.id}
          email={el.from.email}
          date={el.date}
          subject={el.subject}
          short_description={el.short_description}
        />
      ))}
    </div>
  );
};

export default Main;
