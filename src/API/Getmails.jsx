

const Getmails = () => {
  return fetch(`https://flipkart-email-mock.now.sh/`).then((res) => res.json());
};

export default Getmails;
