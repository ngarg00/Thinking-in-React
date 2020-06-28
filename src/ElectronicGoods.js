import React from 'react'

const ElectronicGoods = ({goods,showOnlyStocked}) => {
    const sortedGoods = showOnlyStocked ? goods.filter(good => {
        return good.stocked === true
    }) : goods;
    return (
        <div className="container">
            <h4>Electronic Goods</h4>
            { sortedGoods.map(good => {
                let id = Math.random();
                return good.category === "Electronics" ? (
                    <p key={id} className={good.stocked + "stocked"}><b>{good.name} :</b> {good.price}</p>
                ) : (
                    null
                )
            })}
        </div>
    )
}

export default ElectronicGoods
