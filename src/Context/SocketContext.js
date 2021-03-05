import { createContext, useEffect, useState } from "react";
import useSocket from "use-socket.io-client";
import { ToastContainer, toast } from "react-toastify";

export const socketContext = createContext();

export const SocketContext = ({ children }) => {
  const [socket] = useSocket(process.env.REACT_APP_API_URI);
  const [msgReceived, setMsgReceived] = useState([]);
  const [followReceived, setFollowReceived] = useState([]);

  useEffect(() => {
    socket.connect();
    // socket.emit("joinRoom", () => {
    //   console.log("joined Rooms");
    // });
    socket.on("notificationMsg", (username) => {
      messagedReceived(username);
      const newArray = msgReceived.push(username);
      setMsgReceived(newArray);
    });

    socket.on("newFollower", (username) => {
      followReceivedMessage(username);
      const newArray = followReceived.push(username);
      setFollowReceived(newArray);
    });
    return () => {
      socket.emit("disconnect");
    };
  }, []);
  const notify = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const resetMsgNotification = () => {
    setMsgReceived([]);
  };
  const resetFollowNotification = () => {
    setFollowReceived([]);
  };
  const messagedReceived = (username) => {
    toast(`${username} sent a message`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const followReceivedMessage = (username) => {
    toast(`${username} started following you`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <socketContext.Provider
      value={{
        socket,
        msgReceived,
        resetMsgNotification,
        followReceived,
        resetFollowNotification,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      {children}
    </socketContext.Provider>
  );
};
