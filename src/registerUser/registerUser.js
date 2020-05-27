import axios from "axios";

const RegisterUser = async (body) => {
  const url = "http://localhost:3001/api/users";
  let responsetosend;
  await axios
    .post(url, {
      name: body.name,
      email: body.email,
      password: body.password,
    })
    .then(function (response) {
      responsetosend = response;
    });
  return responsetosend;
};

export default RegisterUser;
