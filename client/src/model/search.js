const Search = (props) => {
    if (props.searchTerm === '') {
        props.filterUsers(props.data)
    }
    else {
        const newData = props.data.filter(user => String(user[props.filter]).includes(String(props.searchTerm)))
        if (newData.length === 0) {
            props.filterUsers(props.data)
            props.setIsExist(true)
        }
        else {
            props.filterUsers(newData)
            props.setIsExist(false)
        }
    }
}

export default Search