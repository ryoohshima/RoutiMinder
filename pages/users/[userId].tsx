const userPage = (props) => {
  const { user } = props;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default userPage;