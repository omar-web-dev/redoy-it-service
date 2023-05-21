import { useForm } from "react-hook-form";
import { API_URL } from "../Components/API_URL";

const AddPortfolio = () => {
  const { register, handleSubmit } = useForm();

  const handleAddProduct = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`${API_URL}portfolio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result) {
        alert("Service Added");
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="bg-[#1f2937] w-full">
      <section className="min:h-[84vh] p-6 rounded-3xl rounded-e-none rounded-b-none bg-gray-100 text-gray-800">
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="container w-max-68 flex  mx-auto space-y-12 "
        >
          <fieldset className=" gap-6 p-6 rounded-md shadow-sm ">
            <div className="justify-center grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full  ">
                <label htmlFor="name" className="">
                  Project Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  {...register("name")}
                  placeholder="Omar Faruk"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full  ">
                <label htmlFor="project_URL" className="">
                  Project Link
                </label>
                <input
                  id="project_URL"
                  name="project_URL"
                  type="text"
                  {...register("project_URL")}
                  placeholder="https://omar.potfolio.com"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="categories" className="text-sm">
                  Categories
                </label>
                <input
                  id="categories"
                  type="text"
                  {...register("categories")}
                  placeholder="Categories"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="image" className="text-sm">
                  Image
                </label>
                <input
                  id="image"
                  type="text"
                  {...register("image")}
                  placeholder="https://image.imgbb.com"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="tools" className="text-sm">
                  Tools
                </label>
                <input
                  id="tools"
                  type="text"
                  {...register("tools")}
                  placeholder="Tools"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full ">
                <label htmlFor="completedDate" className="">
                  Completed Date
                </label>
                <input
                  id="completedDate"
                  type="date"
                  {...register("completedDate", {
                  })}
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>
              {/* <div className="col-span-full ">
                <label htmlFor="image" className="">
                  Real Image
                </label>
                <input
                  id="image"
                  type="file"
                  //   {...register("image", {
                  //     required: "image is required",
                  //   })}
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div> */}
              <input
                className={`btn btn-accent mt-4`}
                value="Add Service"
                type="submit"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddPortfolio;
