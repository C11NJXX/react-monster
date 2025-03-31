import { useState } from "react";

interface UserProfileShape {
  id: number;
  name: string;
  email: string;
}

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileShape>({
    id: 1,
    name: "Cya",
    email: "cya@mail.com",
  });
  return (
    <div>
      <p>ID:{userProfile.id}</p>
      <p>NAME:{userProfile.name}</p>
      <p>EMAIL:{userProfile.email}</p>
    </div>
  );
};

export default UserProfile;
