

const KeywordInput = ({ keyword }) => {
  return (
    <div className="container text-center my-5 fs-1">
      <label className="" htmlFor="inputKeyword">今天，我想來點</label>
      <input className="keyword-input border-top-0 border-start-0 border-end-0 border-dark bg-transparent text-center" 
      id="inputKeyword" type="text" disabled value={keyword} />
      。
    </div>
  );
}

export default KeywordInput;