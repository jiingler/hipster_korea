import toast, { Toaster } from 'react-hot-toast';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';

const KoreanField = ({keywordKorean}) => {
  const [state, setState] = useState({value: 'some\ntext', copied: false}) 

  const onCopy = () => {
    setState({copied: true})
    toast('複製完成')
  };

  return (
    <div id="korean-field" className="korean-field text-center mb-md-5 mb-4 d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center me-2">
        <p className="mb-0">關鍵字韓文：</p>
        <span>（點擊可以複製）</span>
      </div>
      {keywordKorean.length > 0 && keywordKorean.map((word, idx) => {
        return (
        <CopyToClipboard onCopy={onCopy} text={word} key={idx}>
          <button className="btn btn-dark rounded-pill me-3">{word}</button>
        </CopyToClipboard>
        );
      })}
      <Toaster 
        toastOptions={{
          style: {
            margin: '20px',
            padding: '8px',
            zIndex: 1,
            width: '100%',
            boxShadow: '5px 5px 10px',
            fontSize: '20px'
          },
          duration: 1500,
        }}/>
    </div>
  );
}

export default KoreanField;