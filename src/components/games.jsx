export const Games = (props) => {
  return (
    <div id='games' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Games</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <div className="game-icon-container">
                  <img className="game-icon" src={d.img}></img>
                  </div>
                  <h3>{d.title}</h3>
                  {/* <p>{d.text}</p> */}
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
