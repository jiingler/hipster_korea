import './customVariable.scss';
import './App.scss';

import weblist from './utils/web.json';

import KeywordInput from './components/KeywordInput';
import ButtonsField from './components/ButtonsField';
import KoreanField from './components/KoreanField';
import WebList from './components/WebList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useState } from 'react';


function App() {
  const webList = weblist.data;
  const [keyword, setKeyword] = useState('');
  const [keywordKorean, setKeywordKorean] = useState('');

  const handleKeywordClick = (keyword) => {
    setKeyword(keyword);
  }
  return (
    <div className="m-auto">
      <Navbar />
      <KeywordInput keyword={keyword} />
      <ButtonsField handleKeywordClick={handleKeywordClick} setKeywordKorean={setKeywordKorean} />
      {keywordKorean !== '' && <KoreanField keywordKorean={keywordKorean}/>}
      <div className="brand-list py-md-5 py-4">
        <div className="container">
          <h3 className="text-center mb-md-5 mb-3">品牌清單</h3>
          {webList.map(web => {
            return (<WebList web={web} key={web.id}/>)
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
