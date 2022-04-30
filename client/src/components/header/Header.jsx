import "./header.css"


const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> React & Node</span>
                <span className="headerTitleLg"> BLOG </span>
            </div>
            <img
                className="headerImg"
                src="https://wallpapercave.com/wp/wp10856440.jpg" alt="header" />
            <div class="slider">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <div class="image-container">
        <img src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="slide"/>
        <img src="https://images.pexels.com/photos/159108/light-lamp-electricity-power-159108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="slide"/>
        <img src="https://images.pexels.com/photos/236588/pexels-photo-236588.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="slide"/>
      </div>
      <div class="buttons">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
      </div>
    </div>
        </div>

    );
}

export default Header;
