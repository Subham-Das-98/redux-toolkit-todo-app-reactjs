import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlertMessage } from "../features/todo/todoSlice";

function UserAlert() {
  const alertMessage = useSelector((state) => state.alertMessage);
  const alertRef = useRef();
  const dispatch = useDispatch();

  function handleCloseBtn() {
    alertRef.current.classList.remove("block");
    alertRef.current.classList.add("hidden");
    dispatch(setAlertMessage("")); //reset alert message
  }

  useEffect(() => {
    if (alertMessage) {
      setTimeout(() => {
        alertRef.current.classList.remove("block");
        alertRef.current.classList.add("hidden");
        dispatch(setAlertMessage("")); //reset alert message
      }, 3 * 1000);
    }
  }, [alertMessage]);

  return (
    <>
      <div
        ref={alertRef}
        className={`bg-slate-950 ${
          alertMessage ? "block" : "hidden"
        } w-max py-2 pl-6 pr-4 rounded-md fixed bottom-4 left-4 transition-all`}
      >
        <span className="text-emerald-600 mr-6">{alertMessage}</span>
        <span className="hover:bg-slate-900 px-1.5 rounded-sm transition">
          <button onClick={handleCloseBtn} className="p-0 text-red-600">
            &#10005;
          </button>
        </span>
      </div>
    </>
  );
}

export default UserAlert;
