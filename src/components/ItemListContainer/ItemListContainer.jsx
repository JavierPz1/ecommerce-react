import './ItemListContainer.css'

function ItemListContainer({ greetings }) {

    return (
        <div className='containerProducts'>
            <h1 className='productsCard'>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer