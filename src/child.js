import React, { useEffect } from "react";

function Child(props) {
  let datatopass = { Name: "kundan", Age: "27" };
  const sendData = (datatopass) => {
    props.data(datatopass);
  };
  //   return <button onClick={sendData}>Click</button>;
  useEffect(() => {
    sendData(datatopass);
  }, []);

  return null;
}

export default Child;
