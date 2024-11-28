import { useEffect, useState } from "react";

useOnlineStatus = () => {
  //check if the user is online
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
  });

  //boolean value is returned
  return onlineStatus;
};

export default useOnlineStatus;