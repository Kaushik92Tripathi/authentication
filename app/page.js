export default async function Home() {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-3xl px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to Our Platform</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your comprehensive solution for team collaboration and project management.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a 
            href="/login" 
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </a>
        
        </div>
      </div>
    </div>
  );
}