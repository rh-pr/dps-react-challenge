import { User } from '../App'

function TableRow({ user, oldestUsersId }: { user: User, oldestUsersId: number[] }) {
    return (
        <tr style={{ backgroundColor: oldestUsersId.includes(user.id) ? 'lightblue' : 'transparent' }}>
            <td>{user.firstName} {user.lasstName}</td>
            <td>{user.city}</td>
            <td>{user.birthDay}</td>
        </tr>
    )
}

export default TableRow