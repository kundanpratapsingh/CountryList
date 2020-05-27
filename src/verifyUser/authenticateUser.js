import axios from "axios";

const authenticateUser = async (username, firstname, password) => {
  const url = "http://localhost:3001/api/users";
  const data = await axios.get(url);
  return data;
};

export default authenticateUser;
