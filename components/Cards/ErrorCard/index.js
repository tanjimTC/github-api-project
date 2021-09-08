const ErrorCard = () => {
  return (
    <div className=" text-white my-4 w-11/12 sm:w-1/2 md:w-1/3 bg-grey-light py-2 px-4 flex items-center  mx-auto rounded border-r-8 border-teal mt-6">
      <div className={"w-12 mr-4"}>
        <img src="/images/1916607.png" alt="" className={"w-full"} />
      </div>
      <div>
        <p className="font-bold">User not found!</p>
        <p>Please search with a valid username.</p>
      </div>
    </div>
  );
};

export default ErrorCard;
