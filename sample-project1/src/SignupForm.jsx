import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './SignupForm.css'

export default function SignupForm() {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain uppercase, lowercase, number and special character'
      )
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <h2>Sign Up</h2>
      
      <div className="form-group">
        <input
          {...register('name')}
          placeholder="Name"
          className="form-input"
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="form-input"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="form-input"
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className="form-group">
        <input
          {...register('confirmPassword')}
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
  )
}