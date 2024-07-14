import { User } from '../App'

function SelectCity({ usersData, setSelectedCity }: {
    usersData: User[],
    setSelectedCity: (value: string) => void
}) {
    const cities = Array.from(new Set(usersData.map(user => user.city))).sort();
    return (
        <div className="formElem">
            <label htmlFor="cities">City</label>
            <select id="cities" name="cities" onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Select city</option>
                {cities.map(city => (
                    <option value={city}>{city}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCity