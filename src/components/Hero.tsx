import { useImageContext } from "@/Context";
import SearchInput from "./SearchInput"
import HeroImage from '@/assets/hero.png'
import { Button } from "./ui/button";


const Hero = () => {
  const { query,data,setQuery,setUrl,urls } = useImageContext();
  const tagsArray = data?.map(image => image?.tags)
 const tags = tagsArray?.map(tag => tag && tag[0]?.title)
 console.log(tags)

const handleBack =()=>
  {
    setQuery('')
    setUrl(urls[1])

   
  }
if(query !== '' )
  return     <div className="w-full max-w-7xl m-auto text-gray-950 dark:text-gray-50   p-5 flex  flex-col gap-3 ">
    <h2 className="font bold text-3xl flex items-center gap-2">
      <Button
      variant="outline"
      onClick={handleBack}
      >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

        </Button>
      {query}</h2>
    {tags && <ul className="flex flex-wrap gap-2 ">
      {
        tags?.map((tag, index) => {
          return <li key={index}><Button variant="secondary">
{tag}
            </Button></li>
        })
      }
      
      </ul>}

  </div>

  return (
    <section className=" flex items-center bg-no-repeat bg-cover  relative min-h-max w-full m-auto text-center ">
        <img src={HeroImage} alt="Hero Image" className="w-full h-[40vh] md:h-fit  object-cover " loading='lazy'   />

    <div className="w-full flex items-center justify-evenly flex-col absolute gap-3 p-5">
    <h1 className="text-xl md:text-2xl lg:text-3xl text-white">Download High Quality Images by creators</h1>
        <p className="text-sm md:text-base text-gray-300">Over 2.4 million+ stock Images by our talented community</p>
      <SearchInput width="w-full max-w-md  md:max-w-2xl " bg="bg-gray-200 " placeholder="Search high resolution images, categories, wallpapers"/>
    </div>

    </section>
  )
}

export default Hero