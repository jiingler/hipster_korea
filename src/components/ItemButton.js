const ItemButton = ({name, setKeywordKorean}) => {
  return (
    <button className="btn btn-outline-dark rounded-pill m-2" onClick={() => setKeywordKorean(name)}>
      #{name}
    </button>
  );
}

export default ItemButton;