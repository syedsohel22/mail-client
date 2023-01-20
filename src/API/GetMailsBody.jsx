import React from "react";

const GetMailsBody = (mailid) => {
  return fetch(`https://flipkart-email-mock.now.sh/?id=${mailid}`).then((res) =>
    res.json()
  );
};

export default GetMailsBody;
