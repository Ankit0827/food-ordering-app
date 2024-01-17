import Image from "next/image";
import pizza from '../../../../public/pizza.png'


export default function MenuItems() {
    return (
        <div className="manu-carddiv-1 flex flex-col gap-4 items-center justify-center bg-gray-100 rounded p-4 hover:bg-white cursor-pointer shadow-xl hover:shadow-black/50 transition-all border-2 my-4">
            <div className="pizza-img-div">
                <Image src={pizza} alt="Pizza" width={200} height={200} />
            </div>
            <div className="card-content-div items-center justify-center">
                <h2 className="text-center font-bold ">Pepperoni Pizza</h2>
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="add-cart-btn-div my-4">
                <button className="bg-primary p-3 rounded-full text-white">Add to cart $12</button>
            </div>
        </div>
    )
}