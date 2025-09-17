import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: users.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users
    }
  };
}

export default Users;

