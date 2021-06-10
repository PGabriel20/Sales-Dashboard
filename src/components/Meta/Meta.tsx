import React, { useEffect, useState } from 'react';
import { AiTwotoneEdit } from "react-icons/ai";

import './styles.scss';

interface MetaData{
  profit: number;
}

const Meta: React.FC<MetaData> = ({profit}) => {
  const [meta, setMeta] = useState(900);
  const [reached, setReached] = useState(false);
  const [metaTimer, setMetaTimer] = useState(false);

  const metaStyle={
    color: '#ffc107'
  }

  useEffect(()=>{
    const savedMeta = localStorage.getItem('meta');
    if(profit > Number(savedMeta)){
      setReached(true);
    }
  },[metaTimer])

  setInterval(()=>{
    setMetaTimer(!metaTimer)
  },3000)

  function newMeta(){
    localStorage.setItem('meta', meta.toString())
  }

  return (
    <div className='meta'>
      <h4>Meta</h4>
      <strong style={reached? undefined:metaStyle}>
        $ {Number(meta).toFixed(2)}
      </strong>
     { reached && <p>You've reached this month's sales meta!</p>}
      <AiTwotoneEdit onClick={newMeta} />
    </div>
  );
}

export default Meta;