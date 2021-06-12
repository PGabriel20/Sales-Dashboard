import {createContext, useState} from 'react';

type ModalContextData = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  remove: boolean;
  setRemove: (state: boolean) => void;
  id: string;
  setId: (state:string) => void;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = (props: any) => {
  const [remove, setRemove] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');

  return  (
    <ModalContext.Provider value={{
        remove, setRemove,
        isOpen, setIsOpen,
        id, setId
      }}>
      {props.children}
    </ModalContext.Provider>
  )
}