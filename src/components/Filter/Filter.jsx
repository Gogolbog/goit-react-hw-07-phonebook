import { Input, Label } from 'components/ContactForm/ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filteredContacts(e.target.value))}
      />
    </Label>
  );
};
