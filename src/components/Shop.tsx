import React from "react";
import getStars from "../components/Getstars"; 
import image1 from "../assets/image1.png";
import image2 from "../assets/image10.png";
import image22 from '../assets/image9.png';
import image5 from "../assets/image13.png";
import image6 from "../assets/image16.png";
import image12 from "../assets/image15.png";
interface Book {
  title: string;
  author: string;
  imageUrl: string;
  rating: number;
  votes: string;
  description: string;
}
const books:Book[] = [
  {
    title: "All The Light We Cannot See",
    author: "By Anthony Doerr",
    imageUrl: image1,
    rating: 4,
    votes: "1,988,288 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Where The Crawdads Sing",
    author: "By Delia Owens",
    imageUrl:image22,
    rating: 4,
    votes: "1,988,288 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Rich People Problems",
    author: "By Kevin Kwan",
    imageUrl: image2,
    rating: 4,
    votes: "2,000,000 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "All The Light We Cannot See",
    author: "By Anthony Doerr",
    imageUrl:image5,
    rating: 4,
    votes: "1,500,000 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Becoming",
    author: "By Michelle Obama",
    imageUrl:image6,
    rating: 4,
    votes: "1,500,000 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Konspirasi Alam Semesta",
    author: "By Fiersa Besari",
    imageUrl:image12,
    rating: 4,
    votes: "1,500,000 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Rich People Problems",
    author: "By Kevin Kwan",
    imageUrl:image2,
    rating: 4,
    votes: "1,500,000 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "All The Light We Cannot See",
    author: "By Anthony Doerr",
    imageUrl:image5,
    rating: 4,
    votes: "1,500,000 voters",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }
];

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
    return (
        
      <div className="relative bg-white rounded-md shadow-md p-6 m-3 flex items-center
      justify-center hover:scale-105 transition-transform md:text-lg text-sm ">
        {/* الصورة */}
        <div className="relative flex-shrink-0 w-1/2">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="absolute md:-left-2/3 -left-1/3 md:top-1/2 transform -translate-y-2/3  md:w-auto   w-1/2 object-cover"
          />
        </div>
  
        {/* التفاصيل */}
        <div className="ml-[-80px]">
          <h3 className=" font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-500">{book.author}</p>
          <div className="flex items-center mt-2">
            {getStars(book.rating, "text-orange-500", "text-gray-400")}
            <span className="text-sm ml-2 text-gray-500">{book.votes}</span>
          </div>
          <p className="text-gray-700 text-sm mt-3">{book.description}</p>
          <button className="mt-4 w-full px-4 py-2 bg-orange-100 text-orange-600 border border-orange-600 rounded-md shadow-md hover:bg-orange-600 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
      
    );
  };
const Shop: React.FC = () => {
    return (
        <div className="flex justify-center items-center mx-auto min-h-screen bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      );
    };
export default Shop;
