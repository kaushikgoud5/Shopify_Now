import React from 'react'
import new_collections from './Assets/new_collections'
import Items from './Items'
const SimilarProducts = () => {
  return (

    <div className="row ">
        <h3 className='text-center text-secondary'>Related Products</h3>
        {new_collections.map((item,index)=>{
           return (
            <div className="col-md-3 mb-4">
                 <Items key={item.id}  id={item.id} image={item.image} name={item.name} oldprice={item.old_price} newprice={item.new_price}/>   
              </div>
            

           ) 
          
          
        
        })}
          
        </div>
  )
}

export default SimilarProducts
