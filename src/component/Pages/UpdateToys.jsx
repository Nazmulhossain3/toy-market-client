import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import useTitle from "../../Hook/useTitle";

const UpdateToys = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useTitle('updateToy')
  console.log(id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(`https://toy-market-server-rho.vercel.app/myTeddy/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Wow you Update a Toy",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <form
      className="border-2 font-serif w-1/2 p-12 mx-auto mt-6 mb-6 rounded-xl bg-base-200 shadow-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl text-center text-green-500 font-serif">Update Your Toy</h2>
      <div className=" flex gap-3 justify-center items-center mt-4">
        {/* register your input into the hook by invoking the "register" function */}
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered input-accent w-full max-w-xs"
          defaultValue=""
          {...register("price")}
        />
      </div>

      <div className=" flex gap-3 justify-center items-center mt-4">
        {/* register your input into the hook by invoking the "register" function */}

        <input
          placeholder="Available quantity"
          className="input input-bordered input-accent w-full max-w-xs"
          defaultValue=""
          {...register("Available_quantity")}
        />
      </div>

      <div className="ml-11 mt-4">
        {/* register your input into the hook by invoking the "register" function */}

        <input
          placeholder="Detail description"
          className=" input input-bordered input-accent w-full max-w-xs"
          defaultValue=""
          {...register("Detail_description")}
        />

        <input
          className="border-2 btn-wide btn  btn-accent mt-2"
          type="submit"
        />
      </div>

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
};

export default UpdateToys;
