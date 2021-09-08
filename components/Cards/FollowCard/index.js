import { useEffect, useState } from "react";
import { getUserInfo } from "../../../redux/slices/userSlice";

const FollowCard = ({ avatar_url, url }) => {
  const [info, setInfo] = useState();

  const getUserDetails = async () => {
    const resRepo = await getUserInfo(url);
    if (resRepo.success) {
      setInfo(resRepo?.response);
    }
  };

  useEffect(() => {
    getUserDetails();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="bg-white rounded-md overflow-hidden border shadow-md">
      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <img className="w-full" src={avatar_url} alt="Follower Avatar" />

          <div className={"mt-4"}>
            <h2 className="text-2xl text-gitIconColor">
              {info?.name || info?.login}
            </h2>
            <div className="flex justify-between mt-4 mb-4 text-gray-500">
              <div className="text-center">
                <p className=" text-gray-600">Followers</p>
                <div className=" lg:text-xl block">{info?.followers}</div>
              </div>
              <div className="text-center">
                <p className=" text-gray-600">Following</p>
                <div className=" lg:text-xl block">{info?.following}</div>
              </div>
              <div className="text-center">
                <p className=" text-gray-600">Repos</p>
                <div className=" lg:text-xl block">{info?.public_repos}</div>
              </div>
            </div>

            <p className="mb-4 text-gray-500">{info?.bio}</p>
          </div>
        </div>
        <div>
          <a
            className="no-underline"
            href={info?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex items-center justify-center text-white bg-gitIconColor p-4 rounded-md w-full uppercase">
              View Git Profile
              <div className={"w-8"}>
                <img
                  src="/images/3072620.png"
                  alt="git icon"
                  className={"ml-2"}
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
