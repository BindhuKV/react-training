import { useForm } from 'react-hook-form';
import './SignupForm.css';

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <h2>Sign Up</h2>
      
      <div className="form-group">
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
          className="form-input"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <input
          {...register('email', { required: 'Email is required' })}
          type="email"
          placeholder="Email"
          className="form-input"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          placeholder="Password"
          className="form-input"
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className="form-group">
        <input
          {...register('confirmPassword', { required: 'Confirm password is required' })}
          type="password"
          placeholder="Confirm Password"
          className="form-input"
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit" className="submit-button">
        Sign Up
      </button>
    </form>
  );
}