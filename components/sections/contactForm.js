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
import ContactFormField from '~components/formField'
import Section from '~components/section'
import Socials from '~components/socials'

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
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_USER_ID
    )
    .then(response => {
      console.log(response.status, response.text)
    })
    .catch(err => {
      console.log(err)
    })
}

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
  background-color: #f9faff;
`

const ContactForm = () => {
  const inputs = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'email',
      label: 'Email'
    },
    {
      name: 'subject',
      label: 'Subject'
    }
  ]
  return (
    <Section delay={0.1} display="inherit">
      <Box my={40}>
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
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validationSchema={schema}
            onSubmit={values => {
              sendMail(values)
            }}
          >
            {props => (
              <Form>
                {inputs.map((el, index) => (
                  <Field key={index} name={el.name}>
                    {({ field, form }) => (
                      <ContactFormField
                        form={form}
                        field={field}
                        name={el.name}
                        label={el.label}
                      />
                    )}
                  </Field>
                ))}
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
