import Image from "next/image";
import pizza from '../../../../public/pizza.png'
import RightArrow from "./icon/Right";

export default function Hero() {
    return (
        <section className="grid grid-cols-2 mx-44 items-center justify-center py-8">
            <div className="">
                <h1 className="font-bold text-6xl">Every  <br/>thing better<br/> with <span className="text-primary"> Pizza</span></h1>
                <p className="mt-8 text-gray-500 text-xl">Pizza is the misssing piece that makes every day complete, a simple yet delicious joy in life</p>
                <div className="flex gap-4 py-4">
                    <button className="flex gap-4 bg-primary text-white p-3 rounded-full items-center justify-center uppercase text-sm">Order now
                        <RightArrow/>
                    </button>
                    <button className="flex gap-3 items-center justify-center text-gray-600 font-semibold">Learn more
                    <RightArrow/>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Image src={pizza} alt="Pizza" width={400} height={200}/>
            </div>

        </section>
    )
}