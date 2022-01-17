function Balance(){
    const ctx  = React.useContext(UserContext);
    const { users } = ctx;
    const renderedUsers = users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.balance}</td>
            <td>{user.name}</td>
          </tr>
        );
      });
    
      return (
        <>
          <h3>Balance</h3>
          <br />
          <h4>Name and Balance</h4>
          <table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Balance</th>
                <th>Name</th>
                
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>1</td>
                <td>{users[1].name}</td>
                <td>{users[1].email}</td>
                <td>{users[1].password}</td>
              </tr> */}
              {renderedUsers}
            </tbody>
          </table>
        </>
      );
    }
    


