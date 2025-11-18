// hooks/useModal.ts (or wherever you prefer to place it)
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from 'antd';

type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = (modalContent: ReactNode): void => {
    setContent(modalContent);
    setVisible(true);
  };

  const closeModal = (): void => {
    setVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal
        open={visible}
        onCancel={closeModal}
        footer={null}
        destroyOnClose
        centered
        width={800}
      >
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}