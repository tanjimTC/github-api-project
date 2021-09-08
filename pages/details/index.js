import { useSelector } from "react-redux";
import TabContainer from "../../components/SubPages/TabContainer";
import { userSelector } from "../../redux/slices/userSlice";
import { ImLocation } from "react-icons/im";
const Index = () => {
  const { gitUser } = useSelector(userSelector);
  return (
    <div>
      <div className="bg-gray-100 bg-opacity-30">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <div className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                     border-2 border-gitIconColor p-1"
                src={gitUser?.avatar_url}
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {gitUser?.name || "Name not available "}
                </h2>
              </div>

              <div className="hidden md:block">
                <div className={"flex items-center"}>
                  <div className={"w-5"}>
                    <img src="/images/2601828.png" alt="logged" />
                  </div>
                  <h1 className="font-semibold ml-2">{gitUser?.login}</h1>
                </div>
                {gitUser?.bio && (
                  <p className={"flex items-start mt-2"}>
                    <span className={"font-semibold text-gray-700 mr-2 w-6"}>
                      <img
                        src="/images/1423788.png"
                        alt="about"
                        className={"mt-1 mr-2"}
                      />
                    </span>
                    <span>{gitUser?.bio}</span>
                  </p>
                )}
                {gitUser?.location && (
                  <p className={"flex items-center mt-5"}>
                    <span className={"font-semibold text-gray-700 "}>
                      <ImLocation className={"text-xl inline mr-2"} />
                    </span>
                    {gitUser?.location}
                  </p>
                )}
              </div>
            </div>

            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">{gitUser?.login}</h1>
              <p>
                <span className={"font-semibold text-gray-700 mr-1"}>Bio:</span>
                {gitUser?.bio}
              </p>
              <p>
                <span className={"font-semibold text-gray-700 mr-1"}>
                  Location:
                </span>
                {gitUser?.location}
              </p>
            </div>
          </div>
          {gitUser && <TabContainer {...gitUser} />}
        </div>
      </div>
    </div>
  );
};

export default Index;
