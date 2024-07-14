import TableRow from "./TableRow"
import { User } from '../App'

// interface UserDataProps {
//     usersData: User[],
// }

function Table({ usersData, oldestUsersId }: { usersData: User[], oldestUsersId: number[] }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name </th>
                    <th>City</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                {usersData.map(user => (
                    <TableRow key={user.id} user={user} oldestUsersId={oldestUsersId} />
                ))}

            </tbody>
        </table>
    )
}

export default Table