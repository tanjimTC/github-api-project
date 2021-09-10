import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import TabContainer from "../components/SubPages/TabContainer";
import { userSelector, getUserInfo } from "../redux/slices/userSlice";
import { ImLocation } from "react-icons/im";
import { AiOutlineLink } from "react-icons/ai";
import { useEffect, useState } from "react";

const Index = () => {
  const [singleUser, setsingleUser] = useState();
  const { gitUser } = useSelector(userSelector);
  const router = useRouter();
  const details = router.query.details;

  useEffect(() => {
    const result = gitUser?.items?.find((user) => user.login === details);
    getUserDetails(result?.url);
  }, [gitUser, details]);

  const getUserDetails = async (url) => {
    const resRepo = await getUserInfo(url);
    if (resRepo.success) {
      setsingleUser(resRepo?.response);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 bg-opacity-30">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <div className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-gitIconColor p-1"
                src={singleUser?.avatar_url}
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {singleUser?.name
                    ? singleUser.name
                    : singleUser?.login
                    ? singleUser?.login
                    : "Name not available"}
                </h2>
              </div>

              <div className="hidden md:block">
                <div className={"flex items-center"}>
                  <div className={"w-5"}>
                    <img src="/images/2601828.png" alt="logged" />
                  </div>
                  <h1 className="font-semibold ml-2">{singleUser?.login}</h1>
                </div>
                {singleUser?.bio && (
                  <p className={"flex items-start mt-2"}>
                    <span className={"font-semibold text-gray-700 mr-2 w-6"}>
                      <img
                        src="/images/1423788.png"
                        alt="about"
                        className={"mt-1 mr-2"}
                      />
                    </span>
                    <span>{singleUser?.bio}</span>
                  </p>
                )}
                {singleUser?.blog && (
                  <div className={"flex items-center mt-2"}>
                    <AiOutlineLink
                      className={"text-xl mr-2 text-gray-600 mt-0.5"}
                    />
                    <span>
                      <a
                        href={singleUser?.blog}
                        target="_blank"
                        rel="noreferrer"
                        className={"underline"}
                      >
                        {singleUser?.blog}
                      </a>
                    </span>
                  </div>
                )}
                {singleUser?.location && (
                  <p className={"flex items-center mt-2"}>
                    <span className={"font-semibold text-gray-700 "}>
                      <ImLocation className={"text-xl inline mr-2"} />
                    </span>
                    {singleUser?.location}
                  </p>
                )}
              </div>
            </div>

            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">{singleUser?.login}</h1>
              {singleUser?.bio && (
                <p>
                  <span className={"font-semibold text-gray-700 mr-1"}>
                    Bio:
                  </span>
                  {singleUser?.bio}
                </p>
              )}
              {singleUser?.location && (
                <p>
                  <span className={"font-semibold text-gray-700 mr-1"}>
                    Location:
                  </span>
                  {singleUser?.location}
                </p>
              )}
            </div>
          </div>
          {singleUser && <TabContainer {...singleUser} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
