import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useSocket from "use-socket.io-client";
import { getAllUserChats } from "../Actions/chatActions";
const SocketTest = () => {
  const [socket] = useSocket(process.env.REACT_APP_API_URI);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserChats());
    socket.connect();
    socket.emit("joinRoom", () => {
      console.log("joined Rooms");
    });

    return () => {
      socket.emit("disconnect");
    };
  }, []);

  return <div></div>;
};

export default SocketTest;
