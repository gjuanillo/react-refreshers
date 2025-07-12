import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormFields = {
    name: string;
    email: string;
}

function HookForms() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormFields>({mode:'onBlur'});
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

    return (
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input type="text"
                        {...register('name',
                            {
                                required: "Name is required!",
                                minLength: {
                                    value: 3,
                                    message: "Name should be at least 3 characters!"
                                }
                            })} />
                </label>
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                <label>
                    Email:
                    <input type="email"
                        {...register('email',
                            {
                                required: "Email is required!",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please input valid email!"
                                }
                            })} />
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                <button type='submit'>Submit</button>
                <button type='button' onClick={() => reset()}>Reset</button>
            </form>
        </div>
    )
}

export default HookForms;
