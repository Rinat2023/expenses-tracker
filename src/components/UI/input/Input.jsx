import React from 'react'
import { styled } from 'styled-components'

export const Input = ({ type, value, onChange, ...rest }) => {
	return (
		<InputStyle value={value} onChange={onChange} {...rest} type={type}></InputStyle>
	)
}
const InputStyle=styled.input`
	font: inherit;
	padding: 0.5rem;
	border-radius: 6px;
	border: 1px solid #ccc;
	width: 20rem;
	max-width: 100%;
`