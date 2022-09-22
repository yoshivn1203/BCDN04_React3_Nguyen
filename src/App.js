import { useState } from 'react';
import data from './shoesData.json';
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
      <Header />
      {isModalOpen && <Modal modalData={modalData} setIsModalOpen={setIsModalOpen} />}
      <ShoeList data={data} showDetail={handleShowDetail} />
    </>
  );
}

export default App;
