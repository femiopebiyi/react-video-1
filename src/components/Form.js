import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("your full name is required"),
        email: yup.string().email().required('email is required'),
        age: yup.number().positive().integer().min(18).required('age is required'),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords dont match").required()
    });

    const { register, handleSubmit,formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    const errorMessage = 'age must be a `number` type, but the final value was: `NaN` (cast from the value `""`).';

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register("age")} />
            <p>{errors.age?.message == errorMessage ? "age is required g" : errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
};
