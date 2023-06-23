import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import Swal from "sweetalert2";
import Wrapper from "../../component/Wrapper";

const CreateUsers = () => {
  const [value, setValue] = useState();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    data.phone= value

    fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "USER CREATE SUCCESSFULLY",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">User name*</span>
          </label>

          <input
            className="input input-bordered w-full "
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">First name is required</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email*</span>
          </label>
          <input
            className="input input-bordered w-full "
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number*</span>
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>

        <input
          type="submit"
          className="btn bg-blue-300 mt-6 "
          value="Create User"
        />
      </div>
    </form>
    </Wrapper>
  );
};

export default CreateUsers;
