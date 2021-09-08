const TextContainer = ({ title, value }) => {
  return (
    <div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-gray-500 font-semibold text-sm">{title}</p>
    </div>
  );
};

export default TextContainer;
