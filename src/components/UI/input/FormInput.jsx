import React from 'react'
import { Input } from './Input'
import { styled } from 'styled-components'

const FormInput = ({
	inputType = 'text',
	onChange,
	label,
	id,
	value,
	...rest
}) => {
	return (
		<div>
			<LabelStyle className='label' htmlFor={id}>
				{label}
			</LabelStyle>
			<Input
				id={id}
				type={inputType}
				value={value}
				onChange={onChange}
				{...rest}
			/>
		</div>
	)
}
const LabelStyle=styled.label`
font-weight: bold;
	margin-bottom: 0.5rem;
	display: block;
`

export default FormInput
