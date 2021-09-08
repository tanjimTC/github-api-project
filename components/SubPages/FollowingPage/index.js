import FollowCard from "../../Cards/FollowCard";

const FollowingPage = ({ userFollowing }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl mb-8">Following</h1>

      <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {userFollowing.map((data, index) => (
          <FollowCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FollowingPage;
