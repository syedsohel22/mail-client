import "../Styles/mailCard.css";

const MailCard = ({ date, email, name, id, subject, short_description }) => {
  //console.log(id);

  const avatar = name[0];
  let time = date;
  let mydate = new Date(time);

  mydate = mydate.toLocaleString("en-US");
  //mydate=mydate.toLocaleString('en-US')
  // let dd=time.toLocaleDateString('en-US')
  // let hh=time.toLocaleTimeString('en-US')

  return (
    <div key={id} className="mail-card">
      <div className="avatar-box">
        <div className="avatar">{avatar}</div>
      </div>
      <div className="mail-description">
        <p>
          From:
          <b>
            {name} &#60;{email}&#62;
          </b>
        </p>

        <p>
          Subject: <b>{subject}</b>
        </p>
        <p>{short_description}</p>
        <p>{mydate}</p>
      </div>
    </div>
  );
};

export default MailCard;
