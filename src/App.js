import './customVariable.scss';
import './App.scss';

import oriWebList from './utils/webList.json';
import koreanTransList from './utils/koreanTransList.json'

import KeywordInput from './components/KeywordInput';
import ButtonsField from './components/ButtonsField';
import KoreanField from './components/KoreanField';
import WebList from './components/WebList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';

import { useState, useEffect } from 'react';
import AOS from 'aos';


function App() {
  const allWebList = oriWebList.data;
  const transList = koreanTransList.data;
  const [webList, setWebList] = useState(allWebList);
  const [keyword, setKeyword] = useState('');
  const [keywordKorean, setKeywordKorean] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleKeywordClick = (keyword) => {
    setKeyword(keyword);
    const filteredWebList = allWebList.filter(web => web.categories.includes(keyword));
    setWebList(filteredWebList);
  }

  const handleItemButtonClick = (zhName) => {
    const [transRes] = transList.filter(item => item.zh === zhName);
    setKeywordKorean(transRes.kr);
  }

  const handleInfoClick = () => {
    setModalShow(true);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="m-auto">
      <Navbar handleInfoClick={handleInfoClick}/>
      <KeywordInput keyword={keyword} />
      <ButtonsField handleKeywordClick={handleKeywordClick} handleItemButtonClick={handleItemButtonClick} />
      {keywordKorean.length !== 0 && <KoreanField keywordKorean={keywordKorean}/>}
      <div className="brand-list py-md-5 py-4">
        <div className="container">
          <h3 className="text-center mb-md-5 mb-3">品牌清單</h3>
          {webList.length === 0 && <p className="text-center">sorry, 還沒找到符合條件的網站</p>}
          {webList.length > 0 && webList.map(web => {
            return (<WebList web={web} key={web.id}/>)
          })}
        </div>
      </div>
      <Footer />
      <InfoModal show={modalShow} onHide={() => setModalShow(false)} animation={false} />
    </div>
  );
}

export default App;
