import TableRow from "./TableRow"

function Table() {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Birthday</th>
            </tr>
            <TableRow />
            <TableRow />
        </table>
    )
}

export default Table