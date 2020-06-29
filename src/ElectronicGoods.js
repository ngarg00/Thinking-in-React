import React from 'react'

const ElectronicGoods = ({goods,showOnlyStocked, searchedValue}) => {
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
            <h4>Electronic Goods</h4>
            { 
                sortedGoods.map(good => {
                let id = Math.random();
                return good.category === "Electronics"? (
                    <p key={id} className={good.stocked + "stocked"}><b>{good.name} :</b> {good.price}</p>
                ) : (
                    null
                )
            })}
        </div>
    )
}

export default ElectronicGoods
