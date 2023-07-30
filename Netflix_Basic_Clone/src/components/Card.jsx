
function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card_img" />
          <div className="card-info">
            <span className="card_category">{props.category_name}</span>
            <h3 className="card_title">{props.card_title}</h3>
            <a href={props.watch_link} target='blank'>
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Card
