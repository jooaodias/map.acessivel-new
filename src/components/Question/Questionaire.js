import React from 'react'
import { FormGroup } from 'reactstrap'
import CustomInput from 'reactstrap/lib/CustomInput'
import { Text } from './Question.styled'


const Questionaire = ({ question, number }) => {
    console.log(`question${question}`)
    return (
        <div>
            <Text>{`${number+1}. ${question}`}</Text>
            <span>
                <FormGroup>
                    <CustomInput type="radio" name={`question${question}`} id={`${number}Sim`} label="Sim" ></CustomInput>
                    <CustomInput type="radio" name={`question${question}`} id={`${number}Não`} label="Não"></CustomInput>
                    <CustomInput type="radio" name={`question${question}`} id={`${number}NS`} label="Não sei"></CustomInput>
                </FormGroup>
            </span>


        </div>
    )
}

export default Questionaire
