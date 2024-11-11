import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteAlertMessage } from "../features/alert/alertSlice";

function AlertMessage({ alertMessage, alertId }) {
  const alertSec = 5; //show alert for how many second
  const alertRef = useRef();
  const dispatch = useDispatch();

  function handleCloseBtn() {
    alertRef.current?.classList.remove("block");
    alertRef.current?.classList.add("hidden");
    dispatch(deleteAlertMessage(alertId)); //reset alert message
  }

  useEffect(() => {
    let tid;
    if (alertMessage) {
      tid = setTimeout(() => {
        alertRef.current?.classList.remove("block");
        alertRef.current?.classList.add("hidden");
        dispatch(deleteAlertMessage(alertId)); //reset alert message
      }, (alertSec * 1000));
    }

    return () => {
      clearTimeout(tid);
    }
  }, []);

  return (
    <>
      <div
        ref={alertRef}
        className={`bg-slate-950 w-max py-2 pl-6 pr-4 mt-2 rounded-md transition-all border border-emerald-900`}
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

export default AlertMessage;
