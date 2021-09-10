import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../../redux/slices/userSlice.js";
import UserCardDetails from "./UserCardDetails";

const UserCard = ({ url }) => {
  const dispatch = useDispatch();
  const [profile, setprofile] = useState();

  useEffect(() => {
    const getUserDetails = async () => {
      const resProfile = await getUserInfo(url);
      if (resProfile.success) {
        setprofile(resProfile?.response);
      }
    };
    getUserDetails();
  }, [dispatch, url]);

  return <div>{profile && <UserCardDetails profile={profile} />}</div>;
};

export default UserCard;
