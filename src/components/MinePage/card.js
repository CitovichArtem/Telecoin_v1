import React from 'react';

const Card =({imgSrc, title, text, profit, lvl, price, showFullCardPage}) => {
    return(
        <section className='card' onClick={()=>showFullCardPage(imgSrc, title, text, profit, lvl, price)}>
            <div className='cardWrapper'>
                <div className='cardTop'>
                    <div className='cardImgBlock'><img width="50px" height='50px' src={imgSrc} /></div>
                    <div className='cardTop__right'>
                        <p className='cardName'>{title}</p>
                        <p className='cardProfitTitle'>Прибыль в час</p>
                        <p className='cardProfit'>{profit}</p>
                    </div>
                </div>
                <div className='cardBottom'>
                    <div className='cardLvl'><p>lvl {lvl}</p></div>
                    <div className='cardPrice'><p>{price}</p> </div>
                </div>
            </div>
        </section>
    )
}
Card.defaultProps = {
    imgSrc: '../img/игра.png',
    title: 'KYC',
    text: 'Внедрите проверку "Знай своего клиента" для идентификации пользователей',
    profit: '2,26K',
    lvl: '14',
    price: '332,3K'
}
export default Card