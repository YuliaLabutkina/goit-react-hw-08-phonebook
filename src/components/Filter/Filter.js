import { useSelector, useDispatch } from 'react-redux';

import tasksActions from '../../redux/phonebook/phonebook-action';
import { filter } from '../../redux/phonebook/phonebook-selectors';
import { FilterLabel, FilterInput } from './Filter.style';

const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector(filter);

  const changeFilterName = e =>
    dispatch(tasksActions.filterContact(e.target.value));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filterBy}
        onChange={changeFilterName}
        type="text"
        placeholder="Enter name"
      />
    </FilterLabel>
  );
};

export default Filter;
