import TextContainer from "./TextContainer";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const UserCardDetails = ({ profile }) => {
  return (
    <div className="flex justify-center items-center mt-3">
      <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div className="relative mb-6">
          <img
            className="w-full"
            src={profile?.avatar_url}
            alt="Profile picture"
          />
          <div
            className="text-center absolute w-full"
            style={{ bottom: "-30px" }}
          >
            <div
              className="mb-10"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4))`,
              }}
            >
              <p className="text-white tracking-wide uppercase text-lg font-bold">
                {profile?.name
                  ? profile.name
                  : profile?.login
                  ? profile?.login
                  : "Name not available"}
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 px-6 text-center tracking-wide grid grid-cols-3 gap-5">
          <TextContainer title="Repos" value={profile?.public_repos} />
          <TextContainer title="Followers" value={profile?.followers} />
          <TextContainer title="Following" value={profile?.following} />
        </div>
        <div className={"text-center mb-4"}>
          <button>
            <Link href={`/${profile?.login}`}>
              <a className="flex mx-auto py-2 px-4 bg-gitIconColor text-white shadow rounded-full">
                View Details <BsArrowRight className={"ml-2 text-2xl"} />
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCardDetails;
