import Item from '../Item/Item';


const ItemList = ({ items }) => {

    return (
        <>
            {items.map((accesory, index) => <Item item={accesory} key={index} />)}
        </>
    )
}

export default ItemList