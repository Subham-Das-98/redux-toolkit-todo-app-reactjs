import React from "react";
import AlertMessage from "./AlertMessage";
import { useSelector } from "react-redux";


function UserAlert() {
  const alerts = useSelector(state => state.alertMessages);

  return (
    <>
      <div className="fixed bottom-4 left-4">
        {alerts.map((alertMsg) => (
          <li className="list-none" key={alertMsg.id}>
          <AlertMessage alertMessage={alertMsg.message} messageId={alertMsg.id} />
          </li>
        )) }
      </div>
    </>
  );
}

export default UserAlert;
