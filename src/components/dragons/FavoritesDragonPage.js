import { Spinner } from "../spinner/Spinner";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Wrapper, WrapperDatails } from "./SingleDragonPage.styled";
import {
  useDeleteDragonMutation,
  useGetFavoritesDragonsQuery,
} from "../../app/favoritesDragons/apiFavoritesDragonsSlice";
import { WrapperDragonsList } from "./DragonList.styled";
import { Link, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

let DragonExcerpt = ({ dragon, deleteDragon, isDeleting }) => {
  return (
    <WrapperDragonsList>
      {/* <ImgWrapper>
        <img src={dragon.flickr_images[0]} alt="dragon" />
      </ImgWrapper> */}
      <Link to={`/dragons/${dragon.id}`}>
        <h3>{dragon.name}</h3>
      </Link>
      <button
        type="button"
        onClick={() => deleteDragon(dragon._id)}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </WrapperDragonsList>
  );
};

export const FavoritesDragonPage = () => {
  console.log(useSelector());
  const {
    data: dragons,
    isFetching,
    isSuccess,
  } = useGetFavoritesDragonsQuery();
  const [deleteDragon, { isLoading: isDeleting }] = useDeleteDragonMutation();
  let content;
  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = dragons.data.map((dragon) => (
      <DragonExcerpt
        key={dragon._id}
        dragon={dragon}
        deleteDragon={deleteDragon}
        isDeleting={isDeleting}
      />
    ));
  }

  return <section className="singl-dragon">{content}</section>;
};
