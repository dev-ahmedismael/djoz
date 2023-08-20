import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const AboutSecThree = () => {
  const itemData = [
    { id: 1, img: "/images/about/ap-1.jpg" },
    { id: 2, img: "/images/about/ap-2.jpg" },
    { id: 3, img: "/images/about/ap-3.jpg" },
    { id: 4, img: "/images/about/ap-4.jpg" },
    { id: 5, img: "/images/about/ap-5.jpg" },
    { id: 6, img: "/images/about/ap-6.jpg" },
    { id: 7, img: "/images/about/ap-7.jpg" },
    { id: 8, img: "/images/about/ap-8.jpg" },
    { id: 9, img: "/images/about/ap-9.jpg" },
    { id: 10, img: "/images/about/ap-10.jpg" },
    { id: 11, img: "/images/about/ap-11.jpg" },
  ];
  return (
    <section>
      <Box sx={{ width: "100%" }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={"Party"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </section>
  );
};

export default AboutSecThree;
