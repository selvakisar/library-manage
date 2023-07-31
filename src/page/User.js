import Base from "./Base";

export default function User() {
  return (
    <Base>
      <div><div className="overflow-x-auto">
  <table className="table-lg table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>From</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Xxx city</td>
        <td>Active</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Ttt city</td>
        <td>Active</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Www city</td>
        <td>Deactive</td>
      </tr>
    </tbody>
  </table>
</div></div>
    </Base>
  );
}
