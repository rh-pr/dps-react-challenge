// interface serchBar {
//     setSearchUser: (value: string) => void
// }

function SearchFilter({ setSearchUser }: { setSearchUser: (value: string) => void }) {
    return (
        <div className="formElem">
            <label htmlFor="searchbar">Name</label>
            <input id="searchbar" name="searchbar" type="text" placeholder="Search by Name" onChange={(e) => setSearchUser(e.target.value)} />
        </div>
    )
}

export default SearchFilter