import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const UserCard = ({ avatar_url, login }) => {
  return (
    <div className="flex justify-center items-center mt-3">
      <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
        <div className="relative mb-6">
          <img className="w-full" src={avatar_url} alt="Profile picture" />
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
                {login}
              </p>
            </div>
          </div>
        </div>
        <div className={"text-center mb-4"}>
          <button>
            <Link href={`/${login}`}>
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

export default UserCard;
