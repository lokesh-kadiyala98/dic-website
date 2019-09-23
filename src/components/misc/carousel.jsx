import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Carousel = () => {
    return ( 
        <OwlCarousel
            id="owl-carousel"
            className="owl-theme"
            loop
            margin={10}
            autoplay
            autoplayTimeout={4000}
            autoplayHoverPause
            center
            touchDrag
            items={1}
            >
            <div className="owl-carousel-item"><img src="https://cdn1.goibibo.com/t_tg_fs/karnataka-bellary-157724408735-orijgp.jpg" alt="Ballari Fort"/></div>
            <div className="owl-carousel-item"><img src="https://st.indiarailinfo.com/kjfdsuiemjvcya24/0/9/7/7/3081977/0/img201802071002281955699.jpg" alt="Ballari Railway Station"/></div>
            <div className="owl-carousel-item"><img src="https://images.assettype.com/fortuneindia%2F2019-04%2Febb13b43-2832-4d40-8cdf-a4c7d3ce497b%2FF_JSW_Vijayanagar_Aerial__Steel_plants___315Fa_copy.JPG?w=1250&q=60" alt="JSW morning view" /></div>
            <div className="owl-carousel-item"><img src="https://www.jsw.in/sites/default/files/assets/cache/images//1200x658energy-resize-1200x658-a7542dd51f-e2177722791a9e60.jpeg" alt="JSW Night view" /></div>
        </OwlCarousel>
    );
}
 
export default Carousel;