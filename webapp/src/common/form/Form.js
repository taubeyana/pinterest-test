import React from 'react';
import Button from './../button/Button'

const Form = props => {
    return (
        <form>
            { props.children }
            <span>{ props.inputDescription }</span>
            <input placeholder = { props.inputPlaceholder }/>
            <span>{ props.textAreaDescription }</span>
            <textarea placeholder = { props.textAreaPlaceholder }></textarea>
            <Button
                buttonType = { props.buttonType } 
                type = { props.type }
                className = { props.className }
                text = { props.text }>
            </Button>

        </form>
    )
}

export default Form;