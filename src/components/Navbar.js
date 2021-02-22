import infoImg from '../assets/images/info.svg';
const Navbar = ({handleInfoClick}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <a className="logo navbar-brand" href="#">
          <h1 className="navbar-brand mb-0 h1 justify-content-center">hipster.korea</h1>
        </a>
        <div className="d-flex align-items-center">
          <a className="info-img bg-light" onClick={()=> handleInfoClick()}>
            <img src={infoImg} alt="info"/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;