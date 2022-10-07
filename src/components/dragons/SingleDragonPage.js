import { Spinner } from "../spinner/Spinner";
import { useGetDragonQuery } from "../../app/dragon/apiSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Wrapper, WrapperDatails } from "./SingleDragonPage.styled";
import {
  useAddDragonMutation,
  useGetFavoritesDragonsQuery,
} from "../../app/favoritesDragons/apiFavoritesDragonsSlice";
import { useLocation } from "react-router-dom";

export const SingleDragonPage = ({ match }) => {
  const { dragonId } = match.params;
  let location = useLocation();

  const { data: dragon, isFetching, isSuccess } = useGetDragonQuery(dragonId);
  const { data: dragons } = useGetFavoritesDragonsQuery();
  const [addDragon] = useAddDragonMutation();

  const handleSubmit = (name, number) => {
    const isNameInDragons = dragons.data.find(
      (drag) => drag.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameInDragons) {
      alert("is already in favorites");
      return;
    }
    addDragon({ name, number });
    alert("add to favorites");
  };

  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <Wrapper>
        <Carousel showThumbs={false}>
          {dragon.flickr_images.map((image) => {
            return <img key={image} src={image} alt="dragon" />;
          })}
        </Carousel>

        <WrapperDatails>
          <p>Name: {dragon.name}</p>
          <p>Description: {dragon.description}</p>
          <p>
            Wikipedia: <a href={dragon.wikipedia}>{dragon.wikipedia}</a>
          </p>
          <p>Height: {dragon.height_w_trunk.meters} m</p>
          <p>Weight: {dragon.dry_mass_kg} kg</p>
          <p>First flight: {dragon.first_flight}</p>
          {location.pathname !== "/" && (
            <button
              type="button"
              onClick={() => handleSubmit(dragon.name, dragon.id)}
            >
              add to favorites
            </button>
          )}
        </WrapperDatails>
      </Wrapper>
    );
  }

  return <section className="singl-dragon">{content}</section>;
};
