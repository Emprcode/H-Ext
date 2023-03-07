import Table from 'react-bootstrap/Table';

export const CustomTable = ({trans})=> {
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Transaction Name</th>
          <th>Income</th>
          <th>Expense</th>
        </tr>
      </thead>
      <tbody>
        {
            trans.map((item, i) => <tr>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td></td>
          </tr>)
        }
       
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

