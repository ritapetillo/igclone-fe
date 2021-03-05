import { useEffect } from "react";
import { BsWindow } from "react-icons/bs";

const useOutsideClick = (ref, ref2, callback) => {
  const handleClick = (e) => {
   

    if (
      ref.current && ref2.current&&
      !ref.current.contains(e.target) &&
      !ref2.current.contains(e.target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    window.document.addEventListener("click", (e) => handleClick(e));

    return () => {
      window.document.addEventListener("remove", (e) => handleClick(e));
    };
  }, []);
};

export default useOutsideClick;
