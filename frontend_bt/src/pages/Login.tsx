// import React from "react";
// import Input from "../components/input_forms/InputText";
// import CheckboxField from "../components/input_forms/Checkbox";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-F8F6F0 dark:bg-gray-900 p-6">
//       <h1 className="text-(--color-primary) font-bold text-2xl mb-6 text-center">
//         Backup Best Trust
//       </h1>
//       <form className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-6">
//         <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
//           Login
//         </h2>

//         <Input
//           label="Email"
//           id="email"
//           type="email"
//           placeholder="you@example.com"
//         />

//         <Input
//           label="Password"
//           id="password"
//           type="password"
//           placeholder="••••••••"
//         />

//         <CheckboxField id="remember" label="Remember me" />

//         <button
//           type="submit"
//           className="w-full rounded-md bg-(--color-primary) px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-(--color-primary-hover) focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary-active) dark:bg-(--color-primary) dark:hover:bg-(--color-primary-hover)">
//           Sign In
//         </button>

//         <p className="text-center text-sm text-gray-600 dark:text-gray-400">
//           Lupa Password?{" "}
//           <a
//             href="#"
//             className="font-semibold underline text-(--color-primary-active) hover:text-(--color-primary-hover) dark:text-(--color-primary-active) dark:hover:text-(--color-primary-hover)">
//             Forget Password
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }

import React from "react";
import Input from "../components/input_forms/InputText";
import CheckboxField from "../components/input_forms/Checkbox";
import Card from "../components/Card";
import logoBBKHIT from "../assets/logo_bbkhit.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // simulasi login berhasil
    navigate("/users/document-type");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-F8F6F p-6">
      <h1 className="text-(--color-primary) font-bold text-2xl mb-6 text-center">
        Login Gas!!🔥
      </h1>

      <Card>
        <div className="shrink-0 flex justify-center items-center">
          <img alt="Baratin" src={logoBBKHIT} className="w-20 h-auto" />
        </div>

        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="you@example.com"
        />

        <Input
          label="Password"
          id="password"
          type="password"
          placeholder="••••••••"
        />

        <CheckboxField id="remember" label="Remember me" />

        <button
          type="button"
          onClick={handleLogin}
          className="w-full rounded-md bg-(--color-primary) px-4 py-2 text-sm font-semibold text-gray-900  shadow-sm hover:bg-(--color-primary-hover) focus-visible:outline focus-visible:outline-2 focus-visible:outline-(--color-primary-active) dark:bg-(--color-primary) dark:hover:bg-(--color-primary-hover)">
          Sign In
        </button>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Lupa Password?{" "}
          <a
            href="#"
            className="font-semibold underline text-(--color-primary-active) hover:text-(--color-primary-hover) dark:text-(--color-primary-active) dark:hover:text-(--color-primary-hover)">
            Hubungi Admin
          </a>
        </p>
      </Card>
    </div>
  );
}
