import { FontIcon } from "./icon"

export const Programs = (props) => {
  return (
    <div id='programs' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Programs</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-4'>
                  {' '}
                  <FontIcon className="fa-icon-square" icon={d.icon}></FontIcon>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
