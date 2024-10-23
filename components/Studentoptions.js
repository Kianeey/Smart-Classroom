export default function Studentoptions ({sFirstName,sLastName,sMiddleName,optionValue}) {
    const sMiddleInitial = sMiddleName ? sMiddleName.charAt(0).toUpperCase() + "." : "";
    return (
        <label className="block">
        <input type="checkbox" value={optionValue}/>
            {sLastName}, {sFirstName} {sMiddleInitial}
        </label>
    )
}