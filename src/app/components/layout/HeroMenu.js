import Image from "next/image";
import salad1 from '../../../../public/sallad1.png'
import salad2 from '../../../../public/sallad2.png'
import MenuItems from "../MenuItems/MenuItem";
import SectionHeader from "./SectionHeader";

export default function HeroMenu() {
    return (
        <div className="heroMenu-div mx-44">

            <div className="heromenu-main-section-div flex items-center justify-between">
                <div>
                    <Image src={salad1} width={200} height={100} alt="sallad1" />
                </div>
                <div className="section-header-div">
                   <SectionHeader subHeader={'Checkout'} mainHeader={'Menu'}/>
                </div>
                <div>
                    <Image src={salad2} width={200} height={100} alt="sallad1" />
                </div>
            </div>

            <div className="MenuCard-div grid grid-cols-3 gap-4">
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
                     <MenuItems/>
            </div>

        </div>
    )
}