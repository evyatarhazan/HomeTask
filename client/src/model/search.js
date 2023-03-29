const Search = (data, filterUsers, search, filterCategory, setErrorSearch) => {
    if (search == '') {
        filterUsers(data)
    }
    else {
        let newData = data.filter(user => String(user[filterCategory]).includes(String(search)))
        console.log(newData)
        if (newData.length === 0) {
            filterUsers(data)
            setErrorSearch('No value matched your search')
            console.log('No value matched your search')
        }
        else {
            filterUsers(newData)
            setErrorSearch()
        }
    }
}

export default Search