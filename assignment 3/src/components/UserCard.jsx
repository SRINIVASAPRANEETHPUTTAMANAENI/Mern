const UserCard = ({ name, email }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
        <p className="text-gray-600 dark:text-gray-300">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
