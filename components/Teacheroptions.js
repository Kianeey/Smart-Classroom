export default function Teacheroptions ({tFirstName,tLastName,tMiddleName,optionValue}) {
    const tMiddleInitial = tMiddleName ? tMiddleName.charAt(0).toUpperCase() + "." : "";
    return (<option value={optionValue}>{tLastName}, {tFirstName} {tMiddleInitial} </option>
    )
}