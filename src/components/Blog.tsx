import React from "react";
import image1 from "../assets/image_1.jpeg";
import image2 from "../assets/image_2.jpeg";
import image3 from "../assets/image_3.jpeg";
import image4 from "../assets/image_4.jpeg";
import image5 from "../assets/image_5.jpeg";
import image6 from "../assets/image_6.jpeg";

interface Card {
  title: string;
  description: string;
  imageUrl: string;
}
const cardsData: Card[] = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst.",
    imageUrl:image1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst.",
    imageUrl: image2,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst.",
    imageUrl:image3,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst.",
    imageUrl:image4,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst.",
    imageUrl:image5,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat pellentesque consequat orci arcu habitasse hac cum dictumst.",
    imageUrl:image6,
  },
];
const ImageGrid: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 text-center">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md  hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageGrid;
