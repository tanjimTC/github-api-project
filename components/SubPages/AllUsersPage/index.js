import React from "react";
import UserCard from "../../Cards/UserCard";

const AllUsersPage = ({ users }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {users?.map((data, index) => (
          <UserCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllUsersPage;
