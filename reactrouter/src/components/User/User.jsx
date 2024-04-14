import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return <div>{userId} is arived</div>;
}
export default User;
