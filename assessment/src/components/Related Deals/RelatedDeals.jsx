"use client"
import DealsCard from "./DealsCard";


const RELATED_DEALS = [
  {
    id: 1,
    img: "/builder1.png",
    name: "Website Builder 1",
    discount: "20",
    discount_period: "limited time",
    features: "Computer  Modern clasic with wix support",
    OG_price: "49.96",
  },
  {
    id: 2,
    img: "/builder1.png",
    name: "Website Builder 1",
    discount: "20",
    discount_period: "limited time",
    features: "Computer  Modern clasic with wix support",
    OG_price: "49.96",
  },
  {
    id: 3,
    img: "/builder1.png",
    name: "Website Builder 1",
    discount: "20",
    discount_period: "limited time",
    features: "Computer  Modern clasic with wix support",
    OG_price: "49.96",
  },
];

export default function RelatedDeals() {
  return (
    <div className="flex flex-col">
      <h1 className="my-5 font-sans md:text-[1.5rem] sm:text-left text-center text-lg text-[#2C384A]">
        Related deals you might like for
        </h1>
        <div className="lg:mt-8 mt-4 flex sm:flex-row flex-col sm:justify-between flex-wrap items-center">
            {RELATED_DEALS.map((deal) => {
                return (
                  <DealsCard 
                  img={deal.img}
                  name={deal.name}
                  discount={deal.discount}
                  discount_period={deal.discount_period} 
                  features={deal.features}
                  OG_price={deal.OG_price}>
                  </DealsCard>
                )
            })}
        </div>
    </div>
  );
}
