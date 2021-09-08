import RepoCard from "../../Cards/RepoCard";

const ReposPage = ({ userRepos }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl">
        Repositories of {userRepos[0]?.owner?.login}
      </h1>
      <p className="text-center text-gray-800 mb-8">
        <a
          className="underline hover:no-underline"
          href={userRepos[0]?.owner?.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View Git Profile
        </a>
      </p>

      <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {userRepos.map((data, index) => (
          <RepoCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
