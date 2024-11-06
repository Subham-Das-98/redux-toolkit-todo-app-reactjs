import React from "react";
import AlertMessage from "./AlertMessage";
import { useSelector } from "react-redux";

function UserAlert() {
  const alerts = useSelector((state) => state.alerts);

  return (
    <>
      <div className="fixed bottom-4 left-4">
        {alerts.map((alert) => (
          <li className="list-none" key={alert.id}>
            <AlertMessage
              alertMessage={alert.message}
              messageId={alert.id}
            />
          </li>
        ))}
      </div>
    </>
  );
}

export default UserAlert;
