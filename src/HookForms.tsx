import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormFields = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function HookForms() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormFields>({ mode: 'onBlur' });
    const onSubmit: SubmitHandler<FormFields> = (data): void => {
        console.log(data);
        reset();
    };
    const watchName = watch('name');
    const watchEmail = watch('email');

    useEffect(() => {
        console.log('Name', watchName);
    }, [watchName]);

    useEffect(() => {
        console.log('Email', watchEmail);
    }, [watchEmail]);

    const validateName = (value: string) => {
        if (value === 'admin') {
            return 'Admin is not allowed';
        }
        return true;
    }

    const existingUsernames = ['admin', 'user123', 'bart']
    const checkUsername = async (username: string): Promise<true | string> => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const exists = existingUsernames.includes(username)
        return exists ? "Username already taken!" : true;
    };

    return (
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Username:
                    <input type="text"
                        {...register('name',
                            {
                                required: "Name is required!",
                                minLength: {
                                    value: 3,
                                    message: "Name should be at least 3 characters!"
                                },
                                validate: {
                                    notAdmin: validateName,
                                    isNotNumber: (value) => isNaN(Number(value)) || "Name cannot be number",
                                    usernameExist: checkUsername
                                }
                            })} />
                </label>
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                <label>
                    Email Address:
                    <input type="email"
                        {...register('email',
                            {
                                required: "Email is required!",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please input valid email!"
                                },
                                validate: (value) => value !== "admin@email.com" || "Admin is not allowed"
                            })} />
                </label>
                {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

                <label>
                    Password:
                    <input type="password"
                        {...register('password',
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password should be at least 6 characters!"
                                }
                            })} />
                </label>
                {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

                <label>
                    Confirm Password:
                    <input type="password"
                        {...register('confirmPassword',
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password should be at least 6 characters!"
                                },
                                validate: value => value === watch('password') || 'Passwords do not match'
                            })} />
                </label>
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}

                <button type='submit'>Submit</button>
                <button type='button' onClick={() => reset()}>Reset</button>
            </form>
        </div>
    )
}

export default HookForms;
