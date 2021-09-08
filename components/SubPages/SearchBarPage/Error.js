const Error = ({ message }) => {
  return (
    <div className={"text-center mt-2"}>
      {message !== undefined ? (
        <p className={"text-red-600 text-sm"}>{message}</p>
      ) : (
        <p className={"text-transparent text-sm select-none"}>no error!</p>
      )}
    </div>
  );
};

export default Error;
