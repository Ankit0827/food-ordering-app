export default function SectionHeader({subHeader,mainHeader}){
    return(
           <>
            <h1 className="text-gray-600 text-4xl">{subHeader}</h1>
            <h2 className="text-primary font-bold text-6xl italic">{mainHeader}</h2>
           
           </>
    )
}