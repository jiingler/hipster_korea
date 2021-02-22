const ItemButton = ({name, handleItemButtonClick}) => {
  return (
    <button  id="liveToastBtn" 
      className="item-btn btn btn-outline-dark rounded-pill m-md-2 m-1 p-md-2 p-1" 
      onClick={() => handleItemButtonClick(name)}>
      #{name}
    </button>
  );
}

export default ItemButton;