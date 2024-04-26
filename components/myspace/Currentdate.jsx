import React, { useEffect, useState } from "react";

const Currentdate = () => {
  const [currentDateTime, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 50*1000);
    return () => clearInterval(interval);
  }, []);
  //   const sec = currentDateTime.getSeconds();
  const day = currentDateTime.getDate();
  const month = currentDateTime.toLocaleString("default", { month: "long" });
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();

  return (
    <div className="text-3xl font-AlbertSans font-semibold">{`Today, ${day} ${month}  ${hours}:${minutes}`}</div>
  );
};

export default Currentdate;
