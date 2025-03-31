import { FC } from "react";
import { Info } from "../types";

const UserInfo: FC<Info> = ({ id, name, email }) => {
  return (
    <div>
      id={id},name={name},email={email}
    </div>
  );
};

export default UserInfo;
