export const identification = (user, admin, visitor) => {
  const role = JSON.parse(localStorage.getItem("user"));
  if (role.role == "user") {
    return user;
  } else if (role.role == "admin") {
    return admin;
  } else if (role.role == "visitor") {
    return visitor;
  } else {
    return visitor;
  }
};
