import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './contactFilter.styled';

export const ContactFilter = ({ filter, onFilter }) => {
  return (
    <FilterBox htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </FilterBox>
  );
};

ContactFilter.propTypes = {
  onFilter: propTypes.func,
  filter: propTypes.string,
};
