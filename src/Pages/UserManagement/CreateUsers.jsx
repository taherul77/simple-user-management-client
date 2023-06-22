import { useForm } from "react-hook-form";

const CreateUsers = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
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
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number*</span>
          </label>
          <input
            className="input input-bordered w-full "
            type="number"
            {...register("phone")}
          />
        </div>

        <input type="submit" className="btn bg-sky-500 mt-6 " value="Create User" />
      </div>
    </form>
  );
};

export default CreateUsers;
