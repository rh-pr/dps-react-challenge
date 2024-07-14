import debounce from "lodash.debounce";
import { useMemo } from "react";


function SearchFilter({ setSearchUser }: { setSearchUser: (value: string) => void }) {

    const changeHandler = (e: any) => {
        setSearchUser(e.target.value)
    }

    const debouncedChangeHandler = useMemo(() => {
        return debounce(changeHandler, 300);
    }, []);

    return (
        <div className="formElem">
            <label htmlFor="searchbar">Name</label>
            <input id="searchbar" name="searchbar" type="text" placeholder="Search by Name" onChange={(e) => debouncedChangeHandler(e)} />
        </div>
    )
}

export default SearchFilter