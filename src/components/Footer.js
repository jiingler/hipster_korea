import instagramImg from '../assets/images/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer text-center pt-3">
      <a href="https://instagram.com/hipster.korea" target="_blank" className="ins-link d-flex justify-content-center align-items-center me-3 mb-3">
        <img src={instagramImg} alt="instagram" className="ins-img me-3"/>
        <p className="m-0 fw-bolder fs-3">hipster.korea</p>
      </a>
      <p className="copyright text-light mb-0 py-2 bg-dark">Made by <a className="text-light" href="https://jiingler.github.io/profile" target="_blank">jiingler</a> © 2021 Copyright</p>
    </footer>
  );
}

export default Footer;