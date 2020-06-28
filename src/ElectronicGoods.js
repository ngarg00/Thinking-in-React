import React from 'react'

const ElectronicGoods = ({goods}) => {
    return (
        <div className="container">
            <h4>Electronic Goods</h4>
            { goods.map(good => {
                let id = Math.random();
                return good.category === "Electronics" ? (
                    <p key={id}><b>{good.name} :</b> {good.price}</p>
                ) : (
                    null
                )
            })}
        </div>
    )
}

export default ElectronicGoods
