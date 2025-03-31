import { FC } from "react";
import { AdminInfoList } from "../types";
const AdminInfo: FC<AdminInfoList> = ({ id, name, email, role, lastLogin }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <p>Last Login: {lastLogin.toLocaleDateString()}</p>
    </div>
  );
};

export default AdminInfo;
