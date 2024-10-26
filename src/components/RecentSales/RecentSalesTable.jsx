/* eslint-disable react/prop-types */
import { Table } from "./style";

function RecentSalesTable({ items }) {
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "success";
    }
  };

  return (
    <Table className="table table-borderless dataTable">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return (
              <tr key={item._id}>
                <th scope="row">
                  <a href="#">{item.number}</a>
                </th>
                <td>{item.customer}</td>
                <td>
                  <a href="#">{item.product}</a>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span className={`badge bg-${handleStatus(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default RecentSalesTable;
