import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction} className="w-full">
      <button 
        className="w-full flex items-center justify-center gap-4 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg px-6 py-3 font-medium transition-colors duration-200 shadow-sm"
      > 
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="20"
          width="20"
          className="h-5 w-5"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;