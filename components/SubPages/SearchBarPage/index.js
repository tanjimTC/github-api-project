import { AiOutlineSearch } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { getUserByName } from "../../../redux/slices/userSlice.js";

const SearchBarPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const res = await dispatch(getUserByName(data?.userName));
  };
  return (
    <div className="flex ">
      <div className="inline mx-auto mt-10">
        <form
          className="w-full flex justify-center bg-white rounded-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-full px-4 py-1 text-gray-900 rounded-full focus:outline-none"
            placeholder="search"
            name="userName"
            {...register("userName", { required: true })}
          />
          <button
            type="submit"
            className={`flex items-center justify-center w-12 h-12 text-gray-500 rounded-full
            `}
          >
            <AiOutlineSearch className={"text-xl md:text-2xl"} />
          </button>
        </form>
        <Error
          message={errors.userName ? "This field is required" : undefined}
        />
      </div>
    </div>
  );
};

export default SearchBarPage;
