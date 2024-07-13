import TableRow from "./TableRow"

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
                <TableRow />
            </tbody>
        </table>
    )
}

export default Table