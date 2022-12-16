import {
  Box,
  Image,
  Text,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { reducer } from "../../Redux/Redux-Product/reducer";
import edit3 from "./img/edit3.jpg";
import "./pro.css";

export default function SingleCard({ item }) {
  const finalPrice = +item.mrpDecimal - Number(item.discountDecimal);




  return (
    <>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        boxShadow={"xs"}
        w="230px"
        h="300px"
        border={"1px solid grey"}
        borderRadius={10}
        className="top-container"
      >
        <Image w="100px" h="150px" src={item.images} mt="10%" />
        <Text as="b" color={"grey"} w="200px" noOfLines={1}>
          {item.name}
        </Text>
        <Box display={"flex"} className="main-box">
          {item.discountPercent == "0" ? (
            <Box>
              <Text fontSize={10}>MRP:</Text>
              <Text fontSize={10} >
                {item.mrpDecimal}
              </Text>
            </Box>
          ) : (
           <Box> <Text
              className="dis-text"
              as="mark"
              fontSize={2}
              fontWeight={"bold"}
            >
              {item.discountPercent}% OFF
            </Text>
            <Text  as='del' >MRP: {item.mrpDecimal}</Text>
            </Box>
          )}
          <Image className="dis-img" w={"100px"} h="30px" src={edit3}></Image>
        </Box>
        <Text>₹{finalPrice.toFixed(2)}</Text>
      </Box>
    </>
  );
}

