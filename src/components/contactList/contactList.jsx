import propTypes from 'prop-types';
import { ContactItem } from '../contactItem/contactItem';
import { List } from './contactList.styled';

export const ContactList = ({ filterContacts, onDelete }) => {
  return (
    <List>
      {filterContacts().map(({ name, number, id }) => (
        
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
