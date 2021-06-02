import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="Banner" 
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="09012021011"
                    title="SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME128HA)"
                    price={16.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81axmUuRHrL._AC_SL1500_.jpg"
                />

                <Product 
                    id="09012021012"
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                    price={164.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                 <Product 
                    id="09012021016"
                    title="AOC CU34G2X 34 Curved Frameless Immersive Gaming Monitor, UltraWide QHD 3440x1440, VA Panel, 1ms 144Hz Freesync, Height Adjustable, 3-Yr Zero Dead Pixels"
                    price={649}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bX4qVo-hL._AC_SL1500_.jpg"
                />

                <Product 
                    id="09012021014"
                    title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, PS5, Switch, Xbox One Controller(Adapter Not Included)"
                    price={26.95}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
                />

                <Product 
                    id="09012021015"
                    title="AMD Ryzen 9 3900X 12-core, 24-thread unlocked desktop processor with Wraith Prism LED Cooler"
                    price={499}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71S31CWSs3L._AC_SL1093_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="09012021013"
                    title="Samsung (MZ-V7E1T0BW) 970 EVO SSD 1TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology, Black/Red"
                    price={139.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81BIRmPUAgL._AC_SL1500_.jpg"
                />
               
            </div>
            
        </div>
    )
}

export default Home
