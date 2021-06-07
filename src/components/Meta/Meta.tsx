import React from 'react';

import './styles.scss';

const Meta: React.FC = () => {
  return (
    <div className='meta'>
      <h4>Meta</h4>
      <strong>
        $1200,00
      </strong>
      <p>You've reached this month's sales meta</p>
    </div>
  );
}

export default Meta;