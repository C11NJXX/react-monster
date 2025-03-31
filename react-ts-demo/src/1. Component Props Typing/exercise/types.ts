type Info = {
  id: string;
  name: string;
  email: string;
};

type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };
