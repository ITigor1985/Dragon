import { css } from "@emotion/react";
import nebo from "../images/nebo.jpg";

export const GlobalStyles = () => css`
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-image: url(${nebo});
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    max-width: 100%; /* Максимальная ширина картинки */
    min-height: 100%; /* Минимальная высота картинки */
    object-fit: cover; /* Всю, выше указанную, облась заполнить картинкой */
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    outline: none;
    color: white;
    &:hover {
      color: #4a9ee8;
    }
  }

  button {
    padding: 0;
  }
`;
