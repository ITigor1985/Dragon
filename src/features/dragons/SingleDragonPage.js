import { Spinner } from "../../components/spinner/Spinner";
import { useGetDragonQuery } from "../api/apiSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Wrapper, WrapperDatails } from "./SingleDragonPage.styled";

export const SingleDragonPage = ({ match }) => {
  const { dragonId } = match.params;

  const { data: dragon, isFetching, isSuccess } = useGetDragonQuery(dragonId);

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
        </WrapperDatails>
      </Wrapper>
    );
  }

  return <section className="singl-dragon">{content}</section>;
};
