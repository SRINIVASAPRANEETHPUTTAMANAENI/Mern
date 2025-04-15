import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Left Side - Welcome Panel */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center md:text-left px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Welcome Back 👋</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Login to your account to access exclusive features.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
