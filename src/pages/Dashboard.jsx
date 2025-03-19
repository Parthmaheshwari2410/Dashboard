 import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="stats">
        <div className="card">
          <h3>Total Users</h3>
          <p>999</p>
        </div>
        <div className="card">
          <h3>Active Sessions</h3>
          <p>200</p>
        </div>
        <div className="card">
          <h3>New Signups</h3>
          <p>20</p>
        </div>
      </div>
      <h3>Recent Transactions</h3>
      <table className="transactions">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Krushna</td>
            <td>$500</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>2</td>
            <td>vatsal</td>
            <td>$150</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ruchit</td>
            <td>$300</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

  