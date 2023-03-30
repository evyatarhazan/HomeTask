const Search = (data, filterUsers, search, filterCategory, setErrorSearch) => {
    if (search == '') {
        filterUsers(data)
    }
    else {
        let newData = data.filter(user => String(user[filterCategory]).includes(String(search)))
        if (newData.length === 0) {
            filterUsers(data)
            setErrorSearch('No value matched your search')
        }
        else {
            filterUsers(newData)
            setErrorSearch()
        }
    }
}

export default Search