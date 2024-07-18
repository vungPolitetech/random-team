import { Ref, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  register: UseFormRegisterReturn;
  error?: string;
};

export const InputForm = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    name,
    label,
    type = "text",
    placeholder,
    register,
    error,
    ...rest
  } = props;
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register}
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={`input input-bordered ${error && "input-error"}`}
        {...rest}
      />
      {error && <span className="text-error">{error}</span>}
    </div>
  );
});
