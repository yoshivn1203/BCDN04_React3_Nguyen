import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ShoeList from './components/ShoeList';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleShowDetail = (shoe) => {
    setModalData(shoe);
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && <Modal modalData={modalData} setIsModalOpen={setIsModalOpen} />}
      <Header />
      <ShoeList showDetail={handleShowDetail} />
    </>
  );
}

export default App;
