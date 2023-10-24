import ImageCard from "./ImageCard";
import Loading from "./Loading";
import { useImageContext } from "@/Context";

const Gallery = () => {
  const { isPending, error, data } = useImageContext();
  

  return (
    <section className="w-full max-w-7xl m-auto    p-5 ">
      {isPending && <Loading />}
      {error && <div>{error}</div>}

      <div className="columns-2 md:columns-3 space-y-5 py-24">
        {data &&
          data?.map((image) => <ImageCard key={image?.id} image={image} />)}
      </div>
    </section>
  );
};

export default Gallery;
