import './Home.css';
import GroupList from "./GroupList.js";

function Home() {
  return (
    <table align="center" width="100%" border="0">
      <tbody>
        <tr>
          <td width="200px">
            <div className="Home-header">
              <p>
                  Groups
              </p>
              <GroupList />
            </div>
          </td>
          <td>
          <div className="Home">
            <p>
                Chat Windows
            </p>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Home;
