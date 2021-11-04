import {
  FormControl,
  Field,
  Form,
  Input,
  FormLabel,
  FormErrorMessage,
  //   FormHelperText,
  Button,
  Box
} from '@chakra-ui/react'
const ContactForm = () => {
  return (
    <Box>
      <Form>
        <Field name="name">
          <FormControl>
            <FormLabel htmlFor="name">First name</FormLabel>
            <Input id="name" placeholder="name" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
        </Field>
        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Box>
  )
}

export default ContactForm
