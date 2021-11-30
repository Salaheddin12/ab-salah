import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import styled from '@emotion/styled'

const FormInput = styled.input`
  color: gray;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e8ecf4;
  border-radius: 8px;
  background: transparent;
  outline: none;
  :focus-visible {
    border: 1px solid #00a19d;
  }
`
const ContactFormField = ({ name, label, form, field }) => {
  return (
    <FormControl isInvalid={form.errors[name] && form.touched[name]} mb={8}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormInput {...field} id={name} color="grey" placeholder={name} />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>
  )
}

export default ContactFormField
