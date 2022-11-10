import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoriteList } from "../src/components/FavoriteList";

function HomePage() {
  const estiloDaHomePage = {
    // backgroundColor: "red"
  };
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  //   console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
        <FavoriteList favorites={config.favorites} />
        
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//   return (
/*      <div>    
            Menu
        </div>; */
// )
// }

const StyledHeader = styled.div`
  .banner {
    width: 100%;
    height: 24rem;
    object-fit: cover;
    object-position: top;
  }
  .foto-perfil {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: felx;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="banner"
        className="banner"
      />

      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto do perfil"
          className="foto-perfil"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
function Timeline({ searchValue, ...props }) {
  // console.log("Dentro do componente", props.playlists);

  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} alt="titulo do vídeo" />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function FavoriteList(props) {
  return (
    <StyledFavoriteList>
      <h2>Favoritos</h2>
      <div className="favorite-item">
        {props.favorites.map((favorite, index) => {
          return (
            <section className="info-favorite" key={index}>
              <a
                href={`https://www.youtube.com/user/${favorite.nickname}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={favorite.image} alt="imagem" />
                <span>{favorite.nickname}</span>
              </a>
            </section>
          );
        })}
      </div>
    </StyledFavoriteList>
  );
}
