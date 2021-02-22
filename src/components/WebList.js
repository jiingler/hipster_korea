const WebList = ({web}) => {
  return (
    <div className="brand mx-md-5 mx-3 p-3 mb-4" data-aos="fade-up" data-aos-offset="200">
        <a href={web.link} target="_blank" className="row">
        <div className="col-md-3 col-12">
          <img src={`../hipster_korea/images/${web.imgUrl}.png`} className="brand-img mr-3 mb-md-0 mb-3" alt={web.name}/>
        </div>
        <div className="brand-info col-md-9 col-12">
          <h5 className="brand-name mt-0 text-md-start text-center fw-bold text-dark">{web.name}</h5>
          <p className="brand-desc">{web.description}</p>
          <div className="brand-tags tags">
            {web.keywords.map((tag,idx) => {
              return <span className="brand-tag badge rounded-pill p-2 m-1" key={idx}>#{tag}</span>
            })}
          </div>
        </div>
      </a>
    </div>
  );
}

export default WebList;