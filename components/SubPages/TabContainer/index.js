import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabHeader from "./TabHeader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getUserInfo,
  userInfoRepo,
  userInfoFollowers,
  userInfoFollowing,
  userSelector,
} from "../../../redux/slices/userSlice.js";
import ReposPage from "../ReposPage";
import FollowersPage from "../FollowersPage";
import FollowingPage from "../FollowingPage";

const TabContainer = ({
  public_repos,
  followers,
  following,
  repos_url,
  followers_url,
  url,
}) => {
  const dispatch = useDispatch();
  const [tabSlected, setTabSlected] = useState("repos");

  const { userRepos, userFollowers, userFollowing } = useSelector(userSelector);

  const handleClick = (text) => {
    setTabSlected(text);
  };

  const getUserDetails = async () => {
    const resRepo = await getUserInfo(repos_url);
    if (resRepo.success) {
      dispatch(userInfoRepo(resRepo?.response));
    }

    const resFollowers = await getUserInfo(followers_url);
    if (resFollowers.success) {
      dispatch(userInfoFollowers(resFollowers?.response));
    }

    const resFollowing = await getUserInfo(`${url}/following`);
    if (resFollowing.success) {
      dispatch(userInfoFollowing(resFollowing?.response));
    }
  };

  useEffect(() => {
    getUserDetails();
    //eslint-disable-next-line
  }, []);

  return (
    <Tabs className="px-px md:px-3 mx-auto">
      <TabList
        className="flex justify-around 
                text-center px-2 pt-2 text-gray-600 leading-snug text-sm border-b"
      >
        <Tab>
          <TabHeader
            title="Repos"
            value={public_repos}
            slug={"repos"}
            handleClick={handleClick}
            active={tabSlected === "repos" ? true : false}
          />
        </Tab>
        <Tab>
          <TabHeader
            title="Followers"
            value={followers}
            slug={"followers"}
            handleClick={handleClick}
            active={tabSlected === "followers" ? true : false}
          />
        </Tab>
        <Tab>
          <TabHeader
            title="Following"
            value={following}
            slug={"following"}
            handleClick={handleClick}
            active={tabSlected === "following" ? true : false}
          />
        </Tab>
      </TabList>

      <TabPanel className={"bg-white "}>
        {userRepos && <ReposPage userRepos={userRepos} />}
      </TabPanel>

      <TabPanel className={"bg-white "}>
        {userFollowers && <FollowersPage userFollowers={userFollowers} />}
      </TabPanel>
      <TabPanel className={"bg-white "}>
        {userFollowing && <FollowingPage userFollowing={userFollowing} />}
      </TabPanel>
    </Tabs>
  );
};

export default TabContainer;
