import React from 'react'
import { FormGroup } from 'reactstrap'
import CustomInput from 'reactstrap/lib/CustomInput'
import { Text } from './Question.styled'


export const questionsAnswered = [
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
    { id: 9, value: '' },
    { id: 10, value: '' },
    { id: 11, value: '' },
]
const Questionaire = ( props ) => {
    const {question, number} = props;
    

    const updatingQuestion = (e, num) => {
        console.log(e.target.value);
        console.log(num)
    
        questionsAnswered[num].value = e.target.value;

    }

    return (
        <div>
            <Text>{`${number + 1}. ${question}`}</Text>
            <span>
                <FormGroup onChange={(e) => updatingQuestion(e, number)}>
                    <CustomInput required type="radio" name={`question${question}`} id={`${number}Sim`} label="Sim" value="S"></CustomInput>
                    <CustomInput required type="radio" name={`question${question}`} id={`${number}Não`} label="Não" value="N"></CustomInput>
                    <CustomInput required type="radio" name={`question${question}`} id={`${number}NS`} label="Não sei" value="NS"></CustomInput>
                </FormGroup>
            </span>


        </div>
    )
}

export default Questionaire
