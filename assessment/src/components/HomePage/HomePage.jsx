"use Client"

import RelatedDeals from "../Related Deals/RelatedDeals";
import Title from "../Title/Title";
import AdvertisingDisclosure from "../TitleDetails/AdvertisingDisclosure";
import TitleDetails from "../TitleDetails/TitleDetails";
import Tools from "../Tool/Tools";
import WebsiteBuilders from "../Website Builders/WebsiteBuilders";
import Signup from "../signup/Signup";

export default function HomePage() {
  return (
    <div className=" overflow-hidden max-w-screen lg:mx-24 sm:mx-12 mx-2  flex flex-col justify-evenly md:items-start items-center">
    <Title text="Best Website Builders in the US"/>
    
    <div className="flex justify-between">
        <div className="flex gap-4">
        <TitleDetails name="Last Updated" date="February 23, 2020" ></TitleDetails>
        <AdvertisingDisclosure></AdvertisingDisclosure>
        </div>
    </div>
    <Tools></Tools>
    <WebsiteBuilders></WebsiteBuilders>
    <RelatedDeals></RelatedDeals>
    <Signup></Signup>
    </div>
  )
}
