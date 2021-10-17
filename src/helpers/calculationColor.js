import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CalculationColor = (props) => {
    const { calculation, icon, title } = props;
    var color
    var assLabel

    if (calculation === true) color = 'green'
    else if (calculation === null) color = 'gray'
    else color = 'red'

    if (color === 'green') assLabel = 'Local acessível para';
    else if (color === 'gray') assLabel = 'Sem informação para';
    else assLabel = 'Local não acessível para';
    const titlePopup = `${assLabel}: ${title}`

    return (
        <FontAwesomeIcon color={color} icon={icon} size="2x" className="mx-1" title={titlePopup} />
    )
}

export default CalculationColor
