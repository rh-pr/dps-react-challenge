import { User } from '../App'

function TableRow({ user }: { user: User }) {
    return (
        <tr>
            <td>{user.firstName} {user.lasstName}</td>
            <td>{user.city}</td>
            <td>{user.birthDay}</td>
        </tr>
    )
}

export default TableRow