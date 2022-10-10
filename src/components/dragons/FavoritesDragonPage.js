import { Spinner } from "../spinner/Spinner";

import {
  useDeleteDragonMutation,
  useGetFavoritesDragonsQuery,
} from "../../app/favoritesDragons/apiFavoritesDragonsSlice";
import { WrapperDragonsList } from "./DragonList.styled";
import { Link } from "react-router-dom";

let DragonExcerpt = ({ dragon, refetch }) => {
  console.log(dragon);
  const [deleteDragon] = useDeleteDragonMutation();

  const onDeleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      deleteDragon(id);
      refetch();
    }
  };

  return (
    <WrapperDragonsList>
      <Link to={`/dragons/${dragon.number}`}>
        <h3>{dragon.name}</h3>
      </Link>
      <button type="button" onClick={() => onDeleteHandler(dragon._id)}>
        Delete
      </button>
    </WrapperDragonsList>
  );
};

export const FavoritesDragonPage = () => {
  const {
    data: dragons,
    isFetching,
    isSuccess,
    refetch,
  } = useGetFavoritesDragonsQuery();

  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    console.log(isSuccess);
    content = dragons.data.map((dragon) => (
      <DragonExcerpt key={dragon._id} dragon={dragon} refetch={refetch} />
    ));
  }

  return <section className="singl-dragon">{content}</section>;
};
