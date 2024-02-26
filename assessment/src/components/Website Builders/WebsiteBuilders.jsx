import BuilderCard from "./BuilderCard";
import builder1 from "../../../public/builder1.png";

const BUILDERS = [
  {
    id: 1,
    img: builder1,
    name: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights:
      "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    rating_name: "Exceptional",
    stars:5,
  },
  {
    id: 2,
    img: builder1,
    name: "SiteCraft 68-Inch Ultimate Web Design Studio",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights:
      "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5,
    rating_name: "Excellent",
    stars:4,

  },
  {
    id: 3,
    img: builder1,
    name: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlights:
      "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.3,
    rating_name: "Exceptional",
    stars:5,

  },
  
];

export default function WebsiteBuilders() {
  return (
    <div>
        {BUILDERS.map((builder) => {
            return (
                <BuilderCard img={builder.img} name={builder.name} description={builder.description} highlights={builder.highlights} stars={builder.stars} rating={builder.rating} rating_name={builder.rating_name} ></BuilderCard>
            )
        })}
    </div>
  );
}
