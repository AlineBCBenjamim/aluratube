import styled from "styled-components";

export const StyledFavoriteList = styled.div`
  width: 100%;
  /* padding: 0; */
  overflow: hidden;
  .favorite-item {
    padding: 16px 32px 0 32px;
  }
  .info-favorite{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 8px;
    text-transform: capitalize;
    margin-left: 32px;
  }
  img {
    border-radius: 50%;
  }
  span {
    padding-top: 8px;
    display: block;
    padding-right: 24px;
  }

  div {
    width: calc(100vw - 16px * 4);
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(100px, 1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    a {
      scroll-snap-align: start;
      span {
        padding-top: 8px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
      }
    }
  }
`;
