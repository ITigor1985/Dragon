import { Spinner } from "../../components/Spinner";
import { useGetDragonQuery } from "../api/apiSlice";

let DragonExcerpt = ({ dragon }) => {
  return (
    <article className="dragon-excerpt">
      <div>
        <img
          src={dragon.flickr_images[0]}
          alt="dragon 1"
          width="500"
          height="500"
        />
      </div>
      <div>
        <img
          src={dragon.flickr_images[1]}
          alt="dragon 1"
          width="500"
          height="500"
        />
      </div>
      <div>
        <img
          src={dragon.flickr_images[2]}
          alt="dragon 1"
          width="500"
          height="500"
        />
      </div>
      <div>
        <img
          src={dragon.flickr_images[3]}
          alt="dragon 1"
          width="500"
          height="500"
        />
      </div>
      <p>{dragon.name}</p>
      <p>{dragon.description}</p>
      <a href={dragon.wikipedia}>{dragon.wikipedia}</a>
      <p>{dragon.height_w_trunk.meters}</p>
      <p>{dragon.dry_mass_kg}</p>
      <p>{dragon.first_flight}</p>
    </article>
  );
};

export const SingleDragonPage = () => {
  const {
    data: dragon,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDragonQuery();

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = <DragonExcerpt dragon={dragon} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Dragon</h2>
      {content}
    </section>
  );
};
