const KoreanField = ({keywordKorean}) => {
  return (
    <div className="text-center fs-3 mb-md-5 mb-4">
      關鍵字韓文：
      <button className="btn btn-dark rounded-pill fs-3">{keywordKorean}</button>
    </div>
  );
}

export default KoreanField;