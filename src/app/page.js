import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HeroMenu from "./components/layout/HeroMenu";
import SectionHeader from "./components/layout/SectionHeader";

export default function Home() {
  return (
    <div className="main-parent-div">
      <Hero />
      <HeroMenu />

      <section className="text-center mx-44 my-8">

        <SectionHeader
          subHeader={'Our Story'}
          mainHeader={'About us'}
        >
        </SectionHeader>
        <div className="flex flex-col gap-4 my-8 items-center justify-center">
          <p className="text-center text-gray-600 font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy of industry text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="text-center text-gray-600 font-semibold">
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-center text-gray-600 font-semibold">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English.
          </p>
        </div>

      </section>

      <section className="contact-us-section-div flex items-center justify-center flex-col gap-4">
         <SectionHeader 
         subHeader={'Don\'t hesitate'}
         mainHeader={'Contact us'}
         />
         <a className="text-4xl" href="tel:+916388946784">+91 6388946784</a>
      </section>

    

    </div>
  )
}
