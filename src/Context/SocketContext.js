import { createContext, useEffect } from "react";
import useSocket from "use-socket.io-client";
export const socketContext = createContext();

export const SocketContext = ({ children }) => {
  const [socket] = useSocket(process.env.REACT_APP_API_URI);

  useEffect(() => {
    socket.connect();
    socket.emit("joinRoom", () => {
      console.log("joined Rooms");
      return () => {
        socket.emit("disconnect");
      };
    });
  }, []);

  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};
