import { FormEventHandler, useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { initFirebase } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string|null>(null);
  initFirebase();
  const auth = getAuth();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setError(null);
      // Login successful, redirect to news page
      router.push("/news");
    } catch (error) {
      switch ((error as FirebaseError).code) {
        case "auth/wrong-password":
          setError("Invalid email or password");
          break;
        case "auth/user-not-found":
          setError("User not found");
          break;
        default:
          setError("An error occurred. Please try again later.");
      }

     
      // Display error message to user
    }
  };
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg px-24 py-8 bg-white rounded-lg shadow-lg relative border-[1px] border-phOrange"
    >
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <Link
        href="/news"
        className="absolute top-0 left-0 m-4 text-gray-700 hover:text-gray-900"
      >
        <div className="absolute top-0 left-0 bg-black rounded-full">
          <svg
            fill="#FFA500"
            height="40px"
            width="40px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 490 490"
          >
            <g>
              <path d="M245,0C109.7,0,0,109.7,0,245s109.7,245,245,245s245-109.7,245-245S380.3,0,245,0z M308.2,335.5l-42.7,42.7L175,287.7 L132.3,245l42.7-42.7l90.5-90.5l42.7,42.7L217.8,245L308.2,335.5z" />
            </g>
          </svg>
        </div>
      </Link>
      {error && (
        <div className="w-full bg-orange-100 border-l-4 border-phOrange text-orange-700 p-4 mb-4 relative " role="alert">
        <div className="w-[75%]">{error}</div>
        <button className="absolute top-0 bottom-0 right-2" onClick={() => setError(null)}>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
        </button>
      </div>
      )}
      
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="email">
          Email
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-[1px] hover:border-phOrange focus:border-[1px] focus:border-phOrange"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold text-lg mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  hover:border-[1px] hover:border-phOrange focus:border-[1px] focus:border-phOrange"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-phOrange transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-200  leading-none tracking-tight text-xl font-bold py-3 px-6 rounded "
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
