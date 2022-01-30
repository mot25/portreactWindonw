import React, { useContext } from "react";
import { Context } from '../Context'


export default function GoodItem(props) {
  const { id, name, images, description, interest } = props.propsItem;
  const { order, setorder } = useContext(Context)
  // console.log('order', order)
  const price = (100 * interest).toFixed(0)

  const toCart = (id) => {
    const obj = {
      name: name,
      price: price,
      id: id,
    }
    // ищим индкес повторного элемента в массиве, всего 2 итога -1 и индекс массива. если -1, то простодлбовляем заказ, 
    const findI = order.findIndex(i => i.id === id)
    console.log('findI', findI)
    if (findI < 0) {
      console.log('also order');
      setorder([...order, {
        ...obj,
        count: 1,
      }])
    } else {
      // если уже был, то создаем новый массив, с помощью map, в нем делеаем проверку 
      console.log('again order');
      const newOrder = order.map((el, i) => {
        //  находим элемент, делаем в поле каунт плюс 1, остальные просто пропускаем  
        if (i === findI) {
          return {
            ...el,
            count: el.count + 1
          }
        } else {
          return el
        }
      })
      console.log('newOrder', newOrder)
      setorder(newOrder)
    }

  }


  return (

    <div className="card">
      <div className="card-image">
        <img src={images.full_background} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h3>{name}</h3>
          <br />
          <p className='card_description'>{description}</p>
        </div>
        <div className="card-action">
          <button data-price={price} onClick={() => toCart(id)} className="btn">buy</button>
          <span className="buy_card">{price}</span>
        </div>
      </div>
    </div>

  );
}

// {
//   name:
//   price
//   id
//   count
// }
// {
//   {
//     "id": "CID_389_Athena_Commando_F_SpaceBunny",
//     "type": {
//         "id": "outfit",
//         "name": "Экипировка"
//     },
//     "name": "Космокролик",
//     "description": "Есть ли морковь на Марсе?",
//     "rarity": {
//         "id": "Epic",
//         "name": "Эпический"
//     },
//     "series": null,
//     "price": 0,
//     "added": {
//         "date": "2019-04-17",
//         "version": "8.40"
//     },
//     "builtInEmote": null,
//     "copyrightedAudio": false,
//     "upcoming": true,
//     "reactive": false,
//     "releaseDate": null,
//     "lastAppearance": null,
//     "interest": 2.29,
//     "images": {
//         "icon": "https://media.fortniteapi.io/images/1c08d5a-213185c-30c32be-d9baf04/transparent.png",
//         "featured": "https://media.fortniteapi.io/images/1c08d5a-213185c-30c32be-d9baf04/full_featured.png",
//         "background": "https://media.fortniteapi.io/images/cosmetics/1c08d5a-213185c-30c32be-d9baf04/v2/background.png",
//         "icon_background": "https://media.fortniteapi.io/images/cosmetics/1c08d5a-213185c-30c32be-d9baf04/v2/icon_background.png",
//         "full_background": "https://media.fortniteapi.io/images/cosmetics/1c08d5a-213185c-30c32be-d9baf04/v2/info.ru.png"
//     },
//     "video": null,
//     "audio": null,
//     "gameplayTags": [
//         "Cosmetics.Source.ItemShop",
//         "Cosmetics.UserFacingFlags.HasUpgradeQuests",
//         "Cosmetics.Set.SpaceBunny"
//     ],
//     "apiTags": [],
//     "battlepass": null,
//     "set": {
//         "id": "SpaceBunny",
//         "name": "Межзвёздный прыжок",
//         "partOf": "Входит в набор «Межзвёздный прыжок»."
//     }
// },
