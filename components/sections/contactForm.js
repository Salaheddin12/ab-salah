import Section from '../section'
import Socials from '../socials'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Heading
} from '@chakra-ui/react'
import * as emailjs from 'emailjs-com'
import { Field, Formik, Form } from 'formik'
import styled from '@emotion/styled'
import * as Yup from 'yup'

const schema = Yup.object({
  name: Yup.string()
    .max(40, 'Must be 40 characters or less')
    .min(3, 'Must have at least 3 characters')
    .required('Required'),
  message: Yup.string()
    .min(40, 'Must be 40 characters or less')
    .required('Required'),
  subject: Yup.string()
    .min(3, 'Must have at least 3 characters')
    .max(40, 'Must be 40 characters or less'),
  email: Yup.string().email('Invalid email address').required('Required')
})

const sendMail = async data => {
  const { name, message, email, subject } = data
  const templateParams = {
    name,
    message,
    email,
    subject
  }
  await emailjs
    .send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      templateParams,
      process.env.USER_ID
    )
    .then(response => {
      console.log(response.status, response.text)
    })
    .catch(err => {
      console.log(err)
    })
}

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
  margin: 0 auto;
  margin-top: 4rem;
  padding: 2rem 3rem;
  box-shadow: 0px 0px 20px 5px rgba(91, 91, 91, 0.17);
  max-width: 24rem;
`

const ContactForm = () => {
  return (
    <Section delay={0.1} display="inherit">
      <Box my={40} bg="#F9FAFF">
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
                sendMail(values)
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
                      mb={8}
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
                      mb={8}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormInput {...field} id="email" placeholder="email" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="subject">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.subject && form.touched.subject}
                      mb={8}
                    >
                      <FormLabel htmlFor="subject">Subject</FormLabel>
                      <FormInput
                        {...field}
                        id="subject"
                        placeholder="subject"
                      />
                      <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="message">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.message && form.touched.message}
                      mb={8}
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
                  m="0 auto"
                  display="block"
                >
                  Submit
                </Button>
                <Socials />
              </Form>
            )}
          </Formik>
        </FormBox>
      </Box>
    </Section>
  )
}

export default ContactForm
