import { useState } from 'react';
import Chip from './index';

const Example = () => {
  const [people, usePeople] = useState([
    {
      name: 'Max',
      active: false
    },
    {
      name: 'Jack',
      active: false

    },
    {
      name: 'Leo',
      active: true

    },
  ]);
  

  const removeChip = (e, id) => {
    let newPeople = [...people];
    newPeople.filter(({ name }) => name !== id);
    
    usePeople(newPeople.filter(({ name }) => name !== id));

  }

  const toggleActiveChip = id => {
    let newPeople = [...people];
    newPeople.map(item => {
        if (item.name === id) {
          item.active = !item.active;
        }
    });
    usePeople(newPeople);
  }

    return (
      <>
        {people.map(({ name, active }) => (
          <Chip
            text={name}
            key={name}
            id={name}
            className={active ? 'active' : ''}
            withClose
            withIcon
            onCloseClick={removeChip}
            onChipClick={toggleActiveChip}
          />
        ))}
      </>
    );
  
}

export default Example;