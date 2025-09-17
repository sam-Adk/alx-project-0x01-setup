import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">
        {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{website}</p>
      <p className="text-gray-600 font-medium">{company.name}</p>
      <p className="text-gray-500 text-sm italic">{company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
