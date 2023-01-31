import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Heading,
  useToast
} from '@chakra-ui/react'
import { Field, Formik, Form } from 'formik'
import styled from '@emotion/styled'
import * as Yup from 'yup'
import ContactFormField from '~components/FormField'
import Section from '~components/Section'
import Socials from '~components/socials'
import { sendMail } from '../../../api'
import { useEffect, useState } from 'react'

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
  max-width: 40rem;
  background-color: #f9faff;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-top: 0.75rem;
`

const ContactForm = () => {
  const toast = useToast()
  const [status, setStatus] = useState('initial');
  const initialFormValues = { name: '', email: '', subject: '', message: '' };

  const handleSubmit = async data => {
    await sendMail(data)
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      })
    }

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
  useEffect(() => {
    if (status === 'success')
      toast({
        title: "Email sent successfully",
        description: "We'll get back to you soon.",
        status: status,
        position: 'top-right',
        isClosable: true,
      })
    if (status === 'error')
      toast({
        title: "There was a probem sending your message",
        description: "Please try again",
        status: status,
        position: 'top-right',
        isClosable: true,
      })
  });
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
        <Formik
          initialValues={initialFormValues}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            handleSubmit(values).then(() => {
            actions.resetForm({
             values: initialFormValues,
           })
          });
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <FormBox>
                <div>
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
                </div>
                <div>
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
                          rows={5}
                          placeholder="message"
                        />
                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Actions>
                    <Button
                      mt={4}
                      type="submit"
                      variant="base"
                    >
                      Submit
                    </Button>
                    <Socials />
                  </Actions>
                </div>
              </FormBox>
            </Form>
          )}
        </Formik>
      </Box>
    </Section>
  )
}

export default ContactForm
