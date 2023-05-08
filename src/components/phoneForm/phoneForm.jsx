import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import {
  FormField,
  Form,
  ErrorMessage,
  ButtonSubmit,
} from './phoneForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),

  number: Yup.number().positive('Must be > 6!').required('Required field!'),
});

export const PhoneForm = ({ onSubmit, contacts }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const nameInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = { id: nanoid(), name, number };
    onSubmit(contact);
    resetForm();
  };

  
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={FormSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <FormField htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              className="lable"
              required
            />
            <ErrorMessage name="name" component="div" />
          </FormField>

          <FormField htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              className="lable"
              required
            />
            <ErrorMessage name="number" component="div" />
          </FormField>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </Form>
      </Formik>
    );
  }


PhoneForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
};
