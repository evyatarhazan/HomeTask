const Search = (data, filterUsers, search, filterCategory, setErrorSearch) => {
    if (search == '') {
        filterUsers(data)
    }
    else {
        let newData = data.filter(user => user[filterCategory].includes(search))
        console.log(newData)
        if (newData.length === 0) {
            setErrorSearch('No value matched your search')
            console.log('No value matched your search')
        }
        else {
            filterUsers(newData)
        }
    }
}

export default Search