"use client";
import { Button, InputForm, ThemeController } from "@/components";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const handleBlur = async (name: keyof IFormInput) => {
    const valid = await trigger(name);
    if (!valid) {
      setError(name, { type: "manual", message: "This field is required" });
    }
  };

  const handleChange = (name: keyof IFormInput) => {
    if (errors[name]) {
      clearErrors(name);
      trigger(name);
    }
  };

  return (
    <main>
      <header>
        <ThemeController />
      </header>
      <section>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6">
          <InputForm
            name="firstName"
            label="First Name"
            placeholder="First Name"
            error={errors.firstName?.message}
            register={{
              ...register("firstName", { required: "This field is required" }),
              onBlur: () => handleBlur("firstName"),
              onChange: async () => handleChange("firstName"),
            }}
          />

          <InputForm
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            error={errors.lastName?.message}
            register={{
              ...register("lastName", { required: "This field is required" }),
              onBlur: () => handleBlur("lastName"),
              onChange: async () => handleChange("lastName"),
            }}
          />

          <InputForm
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            error={errors.email?.message}
            register={{
              ...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email",
                },
              }),
              onBlur: () => handleBlur("email"),
              onChange: async () => handleChange("email"),
            }}
          />

          <Button type="submit">Submit</Button>
        </form>
      </section>
      <footer>vungbt</footer>
    </main>
  );
}
