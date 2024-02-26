"use Client"

import Title from "../Title/Title";
import AdvertisingDisclosure from "../TitleDetails/AdvertisingDisclosure";
import TitleDetails from "../TitleDetails/TitleDetails";
import Tools from "../Tool/Tools";
import WebsiteBuilders from "../Website Builders/WebsiteBuilders";

export default function HomePage() {
  return (
    <div className="max-w-screen mx-24 flex flex-col justify-evenly ">
    <Title text="Best Website Builders in the US"/>
    
    <div className="flex justifu-between">
        <div className="flex gap-4">
        <TitleDetails name="Last Updated" date="February 23, 2020" ></TitleDetails>
        <AdvertisingDisclosure></AdvertisingDisclosure>
        </div>
    </div>
    <Tools></Tools>
    <WebsiteBuilders></WebsiteBuilders>
    </div>
  )
}
