function AllData() {
  const ctx = React.useContext(UserContext);
  const users = ctx.users.map((user, index) => {
      return (
          <tr key={index}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
          </tr>
      );
  });
  return (

<container>
  <div className="card">
  <div className="container-fluid" font-size="5em">
      <br />
      <h1>All Clients</h1>
      </div>
      <br />
      <table className="table table-striped Hover">
          <thead>
          <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>   
              <th scope="col">Balance</th>
          </tr>
          </thead>
          <tbody>
              {users}
          </tbody>
      </table>
  </div>
</container>


  );
}