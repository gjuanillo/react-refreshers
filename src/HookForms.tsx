import { useForm, type SubmitHandler } from "react-hook-form";

type FormFields = {
    name: string;
    email: string;
}

function HookForms() {
    const { register, handleSubmit } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = (data): void => {
        console.log(data);
    };

    return (
        <div>
            <h1>Forms in React</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input {...register('name')} />
                </label>
                <label>
                    Email:
                    <input {...register('email')} />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default HookForms;
