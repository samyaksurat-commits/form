import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "./ui/spinner";

const Hero = ({ data }) => {
  //     const [isloading,setIsLoading]=useState(true);
  //   useEffect(() => {
  //     axios
  //       .get(`https://rickandmortyapi.com/api/character`)
  //       .then((res) => {
  //         console.log(res.data.results);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //       .finally(()=>{setIsLoading(false)})
  //   });

  // if(isloading){
  //     return (<Spinner/>)
  // }

  return (
    <>
      <h2>Hero Section</h2>
      <div className="flex justify-center p-1 dark:text-red-700">
        <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent>
                      <img src={item.image} alt="ImageofCharacters" />
                      <span className="font-bold text-lg ">{item.name} {item.status} {item.gender}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
