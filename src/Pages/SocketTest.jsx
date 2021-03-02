import React, { useEffect } from "react";
import useSocket from "use-socket.io-client";
const SocketTest = () => {
  const [socket] = useSocket(process.env.REACT_APP_API_URI);

  useEffect(() => {
    socket.connect();

    return () => {
      console.log("return");
    };
  }, []);

  return <div></div>;
};

export default SocketTest;
