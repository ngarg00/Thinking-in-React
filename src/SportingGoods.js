import React from 'react'

const SportingGoods = ({goods,showOnlyStocked,searchedValue}) => {
    let sortedGoods = showOnlyStocked ? goods.filter(good => {
        return good.stocked === true
    }) : goods;
    sortedGoods = searchedValue !== null ? (
        sortedGoods.filter((good) => {
            return good.name.includes(searchedValue)
        })
    ) : (
        sortedGoods
    );
    return (
        <div className="container">
            <h4>Sporting Goods</h4>
            { sortedGoods.map(good => {
                let id = Math.random();
                return good.category === "Sporting Goods" ? (
                    <p key={id} className={good.stocked + "stocked"}><b>{good.name} :</b> {good.price}</p>
                ) : (
                    null
                )
            })}
        </div>
    )
}

export default SportingGoods
