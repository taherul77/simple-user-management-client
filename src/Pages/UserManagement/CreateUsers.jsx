import { useForm } from "react-hook-form";

const CreateUsers = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input 
      {...register("name", { required: true })} 
      aria-invalid={errors.name ? "true" : "false"} 
    />
    {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

    <input 
      {...register("mail", { required: "Email Address is required" })} 
      aria-invalid={errors.mail ? "true" : "false"} 
    />
    {errors.mail && <p role="alert">{errors.mail?.message}</p>}
    
    <input type="submit" />
  </form>

  );
};

export default CreateUsers;
