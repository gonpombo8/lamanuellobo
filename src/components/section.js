import React from 'react';
import browser from 'bowser';
import classnames from 'classnames';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

const Image = ({img}) => {
  return (
    <div className={classnames({'img-services': !browser.mobile})}>
      <img role="presentation" className="img-responsive" src={img} />
    </div>
  )
}
const Text = ({children, title, inverse, url}) => {
  return (
    <div className={classnames({'text-right': inverse, 'text-left': !inverse})}>
      <h3 className={classnames('title-services', {'title-services-right': inverse})}>{title}</h3>
      {children}
      {url && <Link to={url}><Button>Ver mas</Button></Link>}
    </div>
  )
}

const ItemService = (props) => {
  const { index, first } = props;
  const inverse = index % 2 !== 0
  return (
    <div className="col-xs-12 mt30">
      {!first && <hr/>}
     {index % 2 === 0 || browser.mobile ?
       <div>
         <div className="col-xs-offset-2 col-xs-4">
           <Image {...props} />
         </div>
         <div className="col-xs-6">
           <Text {...props} inverse={inverse}/>
         </div>
       </div>
       :
       <div className="pull-right">
         <div className="col-xs-offset-1 col-xs-6">
           <Text {...props} inverse={inverse}/>
         </div>
         <div className="col-xs-4">
           <Image {...props}/>
         </div>
       </div>
     }
    </div>
  )
}
export default ItemService;
