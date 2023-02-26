import React from 'react'
import carouselImage from '../Images/carousel1.jpg'
import { Box, Grid, Image, Text, Link } from "@chakra-ui/react";
import Slider from 'react-slick';


const TopBrands = [
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg",
  },
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg",
  },
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg",
  },
  {
    img1: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
    img2: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg",
  },
];

const category = [
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg",
];
function Home() {

  return (
    <div style={{padding:"50px"}}>
      <img src={carouselImage} alt="caruselImage" style={{ display: "flex", margin: "auto", marginTop: "20px" }} />

      <Box>
        <Text
          m="20px 0"
          fontSize={{ base: "16px", sm: "20px", md: "25px" }}
          fontWeight={500}
          letterSpacing={{ base: 1, sm: 2, md: 3 }}
        >
          BIGGEST DEALS ON TOP BRANDS
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
          {TopBrands.map((img, i) => {
            return (
              <div key={i}>
                <Link to="/mens">
                  <Image src={img.img1} alt={i} height="300px" width="300"/>
                  <Image src={img.img2} alt={i} height="300px" width="300"/>
                </Link>
              </div>
            );
          })}
        </Grid>
      </Box>

      {/* catagories  */}

      <Box>
        <Text
          m="20px 0"
          fontSize={{ base: "16px", sm: "20px", md: "25px" }}
          fontWeight={500}
          letterSpacing={{ base: 1, sm: 2, md: 3 }}
        >
           CATEGORIES TO BAG
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "8", sm: "12", md: "16" }}
        >
           {category.map((img, i) => {
              return (
                <div key={i}>
                  <Link to="/mens">
                    {" "}
                    <Image src={img} alt={i} height="200px" width="200"/>
                  </Link>
                </div>
              );
            })}
        </Grid>
      </Box>

    </div>
  )
}

export default Home
