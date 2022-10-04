import { Link } from "react-router-dom";
import { Spinner } from "../../components/spinner/Spinner";
import { useGetDragonsQuery } from "../api/apiSlice";

let DragonExcerpt = ({ dragon }) => {
  return (
    <article key={dragon.id}>
      <Link to={`/dragons/${dragon.id}`}>
        <h3>{dragon.name}</h3>
      </Link>
    </article>
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
      <h2>Dragons</h2>
      {content}
    </section>
  );
};
