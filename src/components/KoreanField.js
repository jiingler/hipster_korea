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
    <div id="korean-field" className="korean-field text-center mb-md-5 mb-4">
      {keywordKorean.length > 0 && '關鍵字韓文：'}
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