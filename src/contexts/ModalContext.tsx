import {createContext, useState} from 'react';

type ModalContextData = {
  // variables for the delete modal
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  deleted: boolean;
  setDeleted: (state: boolean) => void;
  id: string;
  setId: (state:string) => void;
  type: string;
  setType: (state: string) => void;
  // variables for the meta modal
  newMeta: boolean;
  setNewMeta: (state: boolean) => void;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = (props: any) => {
  const [deleted, setDeleted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  
  const [newMeta, setNewMeta] = useState(false);
  

  return  (
    <ModalContext.Provider value={{
        deleted, setDeleted,
        isOpen, setIsOpen,
        id, setId,
        type, setType,
        newMeta, setNewMeta
      }}>
      {props.children}
    </ModalContext.Provider>
  )
}