import { Link } from "react-router-dom";
import { Spinner } from "../spinner/Spinner";
import { useGetDragonsQuery } from "../../app/dragon/apiSlice";
import { ImgWrapper, WrapperDragonsList } from "./DragonList.styled";

let DragonExcerpt = ({ dragon }) => {
  return (
    <WrapperDragonsList>
      <ImgWrapper>
        <img src={dragon.flickr_images[0]} alt="dragon" />
      </ImgWrapper>
      <Link to={`/dragons/${dragon.id}`}>
        <h3>{dragon.name}</h3>
      </Link>
    </WrapperDragonsList>
  );
};

export const DragonsList = () => {
  const {
    data: dragons,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDragonsQuery();

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = dragons.map((dragon) => (
      <DragonExcerpt key={dragon.id} dragon={dragon} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "40px",
        }}
      >
        Dragons List
      </h2>
      {content}
    </section>
  );
};
