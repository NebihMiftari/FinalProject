import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade id="si">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.hdqwalls.com/wallpapers/valorant-2020-5k-dq.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Valorant</h1>
          <p className='fs-3'>
          Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gadgetsloud.com/wp-content/uploads/2020/04/PubG-Wallpaper.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Pubg</h1>
          <p className='fs-4'>PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds) is a battle royale game developed by PUBG Studios and published by Krafton.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dmarket.com/blog/best-csgo-wallpapers/tercsgo_huc01d3a403c050d47715d6aeed15b344f_839613_1920x1080_resize_q100_lanczos.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark'>CSGO</h3>
          <p className='text-dark fs-4 tx-bold'>Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;