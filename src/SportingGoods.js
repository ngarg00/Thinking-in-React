import React from 'react'

const SportingGoods = ({goods,showOnlyStocked}) => {
    const allGoods = showOnlyStocked ? goods.filter(good => {
        return good.stocked === true
    }) : goods;
    return (
        <div className="container">
            <h4>Sporting Goods</h4>
            { allGoods.map(good => {
                let id = Math.random();
                return good.category === "Sporting Goods" ? (
                    <p key={id}><b>{good.name} :</b> {good.price}</p>
                ) : (
                    null
                )
            })}
        </div>
    )
}

export default SportingGoods
