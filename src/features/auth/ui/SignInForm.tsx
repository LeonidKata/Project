import { useState } from 'react';

import adminEmails from '../model/AdminEmails';

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isValid = emailRegex.test(email);
    const isAdmin = isValid && adminEmails.includes(email.toLowerCase());
    return { isValid, isAdmin, error: isValid ? '' : 'Invalid email format' };
  };

  const validatePassword = (password: string) => {
    return password.length < 6 ? 'Password must be at least 6 characters' : '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const { isValid, error } = validateEmail(value);
      setErrors({ ...errors, email: error });
    } else if (name === 'password') {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid: emailValid, error: emailError, isAdmin } = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    setErrors({ email: emailError, password: passwordError });

    if (emailValid && !passwordError) {
      console.log(`Form submitted (${isAdmin ? 'Admin' : 'User'}):`, formData);
    } else {
      console.log('Validation failed:', errors);
    }
  };

  const isAdmin = validateEmail(formData.email).isAdmin;

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isAdmin ? 'Вход для админа' : 'Вход'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="input text"
            className="w-full p-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <label className="block text-sm font-medium mr-2">Пароль</label>
            <span
              className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300 cursor-pointer"
              onClick={() => setFormData({ ...formData, password: '' })}
            >
              ✕
            </span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="input text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
             {showPassword ? 'X' : 'O'} {/*'Временно'*/}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">Ошибка ввода! Зарегистрируйтесь</p>
          )}
        </div>
        <div className="mb-4 flex justify-center">
          <a href="/register" className="text-gray-500 underline hover:text-blue-500">
            нет акка? зарегайся
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[72px] h-[40px] bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;