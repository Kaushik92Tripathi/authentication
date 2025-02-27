import { auth } from "../_lib/auth";
import SignOutButton from '../_components/SignOutButton';
import { FaUser, FaEnvelope, FaClock, FaProjectDiagram, FaCheckCircle, FaUsers, FaPhone, FaGlobe, FaBuilding } from 'react-icons/fa';

// Function to fetch users
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function Page() {
  const session = await auth();
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-10 w-10 rounded-full border-2 border-blue-200"
                referrerPolicy="no-referrer"
              />
              <span className="text-gray-700 font-medium">{session.user.name}</span>
            </div>
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
    
        {/* Users Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Team Members</h2>
            <div className="flex space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                All Users
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {users.length} Members
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {users.map((user) => (
              <div key={user.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-700 font-bold text-lg">{user.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">@{user.username}</p>
                    
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <FaEnvelope className="mr-1 text-blue-500" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <FaPhone className="mr-1 text-blue-500" />
                        <span className="truncate">{user.phone}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <FaGlobe className="mr-1 text-blue-500" />
                        <span className="truncate">{user.website}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <FaBuilding className="mr-1 text-blue-500" />
                        <span className="truncate">{user.company.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}