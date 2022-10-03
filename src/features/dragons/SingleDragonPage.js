import { Spinner } from "../../components/spinner/Spinner";
import { useGetDragonQuery } from "../api/apiSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const SingleDragonPage = ({ match }) => {
  const { dragonId } = match.params;

  const { data: dragon, isFetching, isSuccess } = useGetDragonQuery(dragonId);

  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <article className="dragon-excerpt" style={{ display: "flex" }}>
        <Carousel showThumbs={false}>
          {dragon.flickr_images.map((image) => {
            return (
              <div key={image}>
                <img src={image} alt="dragon" />
              </div>
            );
          })}
        </Carousel>

        <div style={{ marginLeft: "20px" }}>
          <p>{dragon.name}</p>
          <p>{dragon.description}</p>
          <a href={dragon.wikipedia}>{dragon.wikipedia}</a>
          <p>{dragon.height_w_trunk.meters}</p>
          <p>{dragon.dry_mass_kg}</p>
          <p>{dragon.first_flight}</p>
        </div>
      </article>
    );
  }

  return (
    <section className="singl-dragon">
      <h2>Dragon</h2>
      {content}
    </section>
  );
};
