import React from 'react'

const ElectronicGoods = ({goods}) => {
    return (
        <div className="container">
            <h4>Electronic Goods</h4>
            {goods.map(good => {
                    if(good.category === "Electronics"){
                        return(
                            <p>{good.name} + " " + {good.price}</p>
                        )
                    }else{
                        return (
                            null
                        )
                    }
                    
            })}
        </div>
    )
}

export default ElectronicGoods
