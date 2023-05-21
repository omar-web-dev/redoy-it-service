// import { useState } from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../Components/API_URL";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  
const handleAddProduct = async (data) => {
    console.log(data)
    try {
      const response = await fetch(`${API_URL}reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if(result){
        alert('')
    }
    } catch (error) {
      console.error(error);
    }
  };

  //   if (!postData) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="bg-[#1f2937] w-full">
      <section className="h-[84vh] p-6 rounded-3xl rounded-e-none rounded-b-none bg-gray-100 text-gray-800">
        {/* <ToastContainer /> */}
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="container w-max-68 flex  mx-auto space-y-12 "
        >
          <fieldset className=" gap-6 p-6 rounded-md shadow-sm ">
        
            <div className="justify-center grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full  ">
                <label htmlFor="name" className="">
                  My Name
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
              <div className="col-span-full">
                <label htmlFor="rating" className="text-sm">
                  Rating
                </label>
                <input
                  id="rating"
                  type="text"
                  {...register("rating", {})}
                  placeholder="5"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full ">
                <label htmlFor="textMe" className="">
                  Text
                </label>
                <textarea
                  id="textMe"
                  type="text"
                  {...register("textMe", {
                    // required: "text is required",
                  })}
                  placeholder="Are you happy"
                  className="w-full rounded-md focus:ring p-2 focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full ">
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
              </div>
              <input
                className={`btn btn-accent mt-4`}
                value="Add Review"
                type="submit"
              />
              {/* {error && <p className="text-red-600">{error}</p>} */}
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddReview;
