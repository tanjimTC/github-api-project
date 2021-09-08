import UserCard from "../components/Cards/UserCard";
import SearchBarPage from "../components/SubPages/SearchBarPage";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/slices/userSlice";
import ErrorCard from "../components/Cards/ErrorCard";

const Home = () => {
  const { gitUser } = useSelector(userSelector);
  console.log(gitUser);
  return (
    <div className={"w-full min-h-screen bg-gray-900"}>
      <SearchBarPage />
      {gitUser === null ? (
        " "
      ) : gitUser === undefined ? (
        <ErrorCard />
      ) : (
        <UserCard {...gitUser} />
      )}
    </div>
  );
};

export default Home;
