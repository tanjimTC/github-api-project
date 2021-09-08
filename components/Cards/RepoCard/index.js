import { AiFillStar, AiFillEye } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { BsCodeSlash } from "react-icons/bs";

const RepoCard = ({
  name,
  stargazers_count,
  watchers_count,
  forks,
  language,
  description,
  html_url,
}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden border shadow-md">
      <div className="p-4 flex flex-col h-full justify-between">
        <div>
          <h2 className="text-2xl text-gitIconColor">{name}</h2>
          <div className="flex justify-between mt-4 mb-4 text-gray-500">
            <div className="flex items-center">
              <AiFillStar className={"text-xl"} />
              <span className="ml-1 lg:text-xl">{stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <AiFillEye className={"text-xl"} />
              <span className="ml-1 lg:text-xl">{watchers_count}</span>
            </div>
            <div className="flex items-center">
              <CgGitFork className={"text-xl"} />
              <span className="ml-1 lg:text-xl">{forks}</span>
            </div>
          </div>
          <p className="mb-4 text-gray-600">
            <BsCodeSlash className={"inline-flex text-xl mr-2"} />
            {language}
          </p>
          <p className="mb-4 text-gray-500">{description}</p>
        </div>
        <div>
          <a
            className="no-underline"
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex justify-center items-center text-white bg-gitIconColor p-4 rounded-md w-full uppercase">
              View Git Repository
              <div className={"w-6"}>
                <img
                  src="/images/3456772.png"
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

export default RepoCard;
