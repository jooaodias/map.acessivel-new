import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CalculationColor = (props) => {
    const { calculation, icon } = props;

    var color

    if (calculation === true) color = 'green'
    else if (calculation === null) color = 'gray'
    else color = 'red'

    return (
        <FontAwesomeIcon color={color} icon={icon} size="2x" />
    )
}

export default CalculationColor
