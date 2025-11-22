
const isAuthorizedUser = (authorizedUsers) => {
  return (userId) => {
    return authorizedUsers.includes(userId);
  };
};
