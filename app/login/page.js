import SignInButton from "@/app/_components/SignInButton";
import { auth } from "../_lib/auth";
import { redirect } from "next/navigation";
import RedirectCountdown from "../_components/RedirectCountdown";

export const metadata = {
  title: "Login",
};

export default async function Page() {
  const session = await auth();
  
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="m-auto w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        <div className="text-center">
          {session ? (
            <div className="bg-blue-50 text-blue-700 p-4 rounded-lg">
              <p className="font-medium">Already logged in</p>
              <RedirectCountdown redirectPath="/dashboard" seconds={5} />
            </div>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600 mb-10">Sign in to access your dashboard</p>
              <SignInButton />
              <div className="w-full mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                <p>Don&apos;t have an account? Contact your administrator</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}