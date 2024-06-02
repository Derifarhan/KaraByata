import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-white px-5 py-28 h-screen w-screen">
      <div className="grid items-center gap-10 grid-cols-2 justify-center">
        <div className="flex flex-col justify-center order-2 p-14 lg:order-1">
          <h className="text-5xl text-black font-bold">
            Masuk untuk melihat
            <br />
            statistik anda
          </h>
          <p className="mt-5 ">
            Belum punya akun?
            <Link to="/register">
              <span className="text-blue-500 font-bold">daftar disini</span>
            </Link>
          </p>
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center items-start px-10 ">
          <h className="text-5xl font-semibold text-black">Selamat Datang</h>
          <div className="mt-10">
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your Email
              </label>
              <div className="relative mb-6">
                <input
                  type="email"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-96 ps-10 p-2.5 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                />
              </div>

              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Password
              </label>
              <div className="flex mb-5">
                <input
                  type="password"
                  id="input-group-1"
                  className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-96 ps-10 p-2.5 dark:bg-lime-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black font-bold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
              <Link to="/lupa-sandi">
                <p className="text-blue-500 ">Lupa Kata sandi</p>
              </Link>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;