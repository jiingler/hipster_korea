import infoImg1 from '../assets/images/info1.png';
import infoImg2 from '../assets/images/info2.png';
import infoImg3 from '../assets/images/info3.png';
import infoImg4 from '../assets/images/info4.png';
import infoImg5 from '../assets/images/info5.png';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="text-center mb-3">使用說明：</h4>
        <ol>
          <li className="mb-3">
            <p>畫面的輸入框(紅框處)是不能輸入的，必須透過點擊下方的黑底類別(箭頭處)來選取！</p>
            <img className="w-100" src={infoImg1} alt="info img"/>
          </li>
          <li className="mb-3">
            <p>點擊黑底類別(箭頭處)後，輸入框(紅框處)會出現點擊的文字。</p>
            <img className="w-100" src={infoImg2} alt="info img"/>
          </li>
          <li className="mb-3">
            <p>點擊類別後，會展開一些類別的關鍵字，點擊關鍵字(箭頭處)後，下方會出現關鍵字的韓文(紅框處)的的區塊。</p>
            <img className="w-100" src={infoImg4} alt="info img"/>
          </li>
          <li className="mb-3">
            <p>再點擊關鍵字的韓文(箭頭處)後，會自動複製，並且上方出現複製完成的視窗(紅框處)。</p>
            <img className="w-100" src={infoImg5} alt="info img"/>
          </li>
          <li className="mb-3">
            <p>點擊類別後，下方的品牌清單會根據你按的類別改變呈現的網站結果。</p>
            <img className="w-100" src={infoImg3} alt="info img"/>
          </li>
          <li>
            <p>最後，你就可以拿著想找的東西的韓文，到下方的網站搜尋瀏覽。如果有看到喜歡的東西的話，可以到我們的ig平台私訊詢問喔！ig連結在網頁最下方喔！</p>
          </li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-dark" onClick={props.onHide}>關閉</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InfoModal;