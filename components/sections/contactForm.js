import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Heading
} from '@chakra-ui/react'
import { Field, Formik, Form } from 'formik'
import styled from '@emotion/styled'
import * as Yup from 'yup'

const schema = Yup.object({
  Name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  message: Yup.string()
    .min(40, 'Must be 40 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required')
})

const FormInput = styled.input`
  color: gray;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 56px;
  border: 1px solid #e8ecf4;
  border-radius: 8px;
  background: transparent;
  outline: none;
  :focus-visible {
    border: 1px solid #00a19d;
  }
`

const FormTextArea = styled.textarea`
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

const FormBox = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 4rem;
  padding: 2rem 3rem;
  max-width: 24rem;
`

const ContactForm = () => {
  return (
    <Box mt={40}>
      <Heading
        as="h2"
        variant="section-subtitle"
        textAlign="center"
        fontSize="3rem"
      >
        Contact
      </Heading>
      <FormBox>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {props => (
            <Form>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    mb={4}
                  >
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormInput
                      {...field}
                      id="name"
                      color="grey"
                      placeholder="name"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                    mb={4}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput {...field} id="email" placeholder="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="message">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.message && form.touched.message}
                    mb={4}
                  >
                    <FormLabel htmlFor="message" color="#333">
                      Message
                    </FormLabel>
                    <FormTextArea
                      {...field}
                      id="message"
                      placeholder="message"
                    />
                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                isLoading={props.isSubmitting}
                type="submit"
                variant="base"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </FormBox>
    </Box>
  )
}

export default ContactForm
