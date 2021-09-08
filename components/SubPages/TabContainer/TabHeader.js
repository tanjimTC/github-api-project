const TabHeader = ({ title, value, slug, handleClick, active }) => {
  return (
    <div
      onClick={() => handleClick(slug)}
      className={`${
        active
          ? "border border-b-0 border-gray-400 px-2 py-2 bg-white"
          : "border border-b-0 border-transparent px-2 py-2 bg-transparent"
      } cursor-pointer`}
    >
      <span className="font-semibold text-gray-800 block">{value}</span>
      {title}
    </div>
  );
};

export default TabHeader;
