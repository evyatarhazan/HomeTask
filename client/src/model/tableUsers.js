const TableUsers = (props) => {
    return (
        <table style={{ tableLayout: "auto" }}>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>IP</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            {props.users.map((user, i) => {
                return (
                    <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.id}</td>
                        <td className="miniNavbarButton" onClick={() => [props.setIpAddress(user.ip), props.setShowIpInfo(true)]}>
                            {user.ip}
                        </td>
                        <td>{user.phone}</td>
                        <td>
                            <button onClick={() => props.modalDelete(user)}>
                                <img src="https://img.icons8.com/material/30/ab5e2a/filled-trash.png" alt="" />
                            </button>
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default TableUsers