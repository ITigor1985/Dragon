import { Spinner } from "../spinner/Spinner";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Wrapper, WrapperDatails } from "./SingleDragonPage.styled";
import { useGetFavoritesDragonsQuery } from "../../app/favoritesDragons/apiFavoritesDragonsSlice";
import { WrapperDragonsList } from "./DragonList.styled";
import { Link } from "react-router-dom";

let DragonExcerpt = ({ dragon }) => {
  return (
    <WrapperDragonsList>
      {/* <ImgWrapper>
        <img src={dragon.flickr_images[0]} alt="dragon" />
      </ImgWrapper> */}
      <Link to={`/dragons/${dragon.id}`}>
        <h3>{dragon.name}</h3>
      </Link>
    </WrapperDragonsList>
  );
};

export const FavoritesDragonPage = () => {
  const {
    data: dragons,
    isFetching,
    isSuccess,
  } = useGetFavoritesDragonsQuery();
  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = dragons.data.map((dragon) => (
      <DragonExcerpt key={dragon._id} dragon={dragon} />
    ));
  }

  return <section className="singl-dragon">{content}</section>;
};
