import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import orangeBackground from "./assets/orange-bg.png";
import excitedReader from "./assets/excited-reader.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image10.png";
import image3 from "./assets/image11.png";
import image4 from "./assets/image21.png";
import image5 from "./assets/image13.png";
import image6 from "./assets/image16.png";
import image7 from "./assets/image17.png";
import image8 from "./assets/image18.png";
import image22 from './assets/image9.png';
import image19 from './assets/image14.png';
 import image9 from "./assets/image19.png";
 import image11 from "./assets/image20.png";
 import image12 from "./assets/image15.png";
import getStars from "../src/components/Getstars";
import Signup from './components/Signup';
import ImageGrid from './components/Blog';
import bookimage from './assets/book.png';
import Shop from './components/Shop';
// تعريف أنواع البيانات
interface Book {
  title: string;
  author: string;
  imageUrl: string;
  rating: number;
  votes: string;
  description: string;
}

interface Section {
  section: string;
  books: Book[];
}
// بيانات الكتب
const booksData: Section[] = [
  {
    section: "Recommended",
    books:[
      {
        title: "All The Light We Cannot See",
        author: "By Anthony Doerr",
        imageUrl: image1,
        rating: 4,
        votes: "1,988,288 voters",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
      {
        title: "Where The Crawdads Sing",
        author: "By Delia Owens",
        imageUrl:image22,
        rating: 4,
        votes: "1,988,288 voters",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
      {
        title: "Rich People Problems",
        author: "By Kevin Kwan",
        imageUrl:image2,
        rating: 4,
        votes: "1,988,288 voters",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
      {
        title: "Crazy Rich Asians",
        author: "By Kevin Kwan",
        imageUrl:image5,
        rating: 4,
        votes: "1,988,288 voters",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
    ]
  },
  {
    section: "Popular",
    books: [
      {
        title: "Tanjong Karu",
        author: "Tere Liye",
        imageUrl: image3,
        rating: 4,
        votes: "",
        description: "",
      },
      {
        title: "Pergi",
        author: "Tere Liye",
        imageUrl:image19,
        rating: 4,
        votes: "",
        description: "",
      },
      {
        title: "Garis Waktu",
        author: "Fiersa besari",
        imageUrl:image4,
        rating: 4,
        votes: "",
        description: "",
      },
      {
        title: "Becoming",
        author: "Miechelle obama",
        imageUrl: image6,
        rating: 4,
        votes: "",
        description: "",
      },
    ]
   
  },

  {
    section: "This New Story",
    books: [
      {
        title: "A Heart So Fierce And Broken",
        author: "By Brigid Kemmerer",
        imageUrl: image7,
        rating: 4,
        votes: "1,988,288 votes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
      {
        title: "Follow Me To Ground",
        author: "By Sue Rainsford",
        imageUrl: image8,
        rating: 4,
        votes: "1,988,288 votes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
      {
        title: "Long Bright River",
        author: "By Liz Moore",
        imageUrl: image9,
        rating: 4,
        votes: "1,988,288 votes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
      {
        title: "Ember Queen",
        author: "By Laura Sebastian",
        imageUrl: image11,
        rating: 4,
        votes: "1,988,288 votes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi.",
      },
    ]
   
  },
  {
    section: "Which They Like",
    books: [
      {
        title: "Tentang Kamu",
        author: "Tere Liye",
        imageUrl: image3,
        rating: 4,
        votes: "",
        description: "",
      },
      {
        title: "Pergi",
        author: "Tere Liye",
        imageUrl: image19,
        rating: 4,
        votes: "",
        description: "",
      },
      {
        title: "Konspirasi Alam Semesta",
        author: "Fiersa Besari",
        imageUrl: image12,
        rating: 4,
        votes: "",
        description: "",
      },
      {
        title: "Becoming",
        author: "Michelle Obama",
        imageUrl: image6,
        rating: 4,
        votes: "",
        description: "",
      },
    ],
   
  }
];

const BooksGrid: React.FC<{ section: Section; }> = ({ section }) => {
  const isPopular = section.section === "Popular" || section.section === "Which They Like";
  const story=section.section==="This New Story";
  return (
    <div className="w-full  lg:text-xl text-xs">
      <section className="mb-12">
        <h2 className={`text-xl  font-bold mb-4 ${story ?"text-center" : "text-left"}`}>{section.section}</h2>
        <div
          className={`grid gap-6 ${
            isPopular ? "grid-cols-4" :` md:grid-cols-${2}`
          }`}
        >
          {section.books.map((book, index) => (
            <div
              key={index}
              className={`flex  ${isPopular ? "flex-col items-center " : "items-center"} gap-4`}
            >
              <img
                src={book.imageUrl}
                alt={book.title}
                className={`rounded-md ${
                  isPopular
                    ? " md:h-40 md:w-3/4 h-20 w-3/4 object-cover"
                    : "h-40 w-auto "
                }`}
              />
              <div className={ ` ${isPopular?"md:text-left text-center":"text-left"} `}>
                <h3 className="font-semibold ">{book.title}</h3>
                <p className="text-gray-500 text-sm">{book.author}</p>
                <div className={`flex items-center text-left ${isPopular? "md:justify-start justify-center":"justify-start mt-2"}`}>
                  {getStars(book.rating, "text-orange-500", "text-gray-400")}
                  <span className="text-sm ml-2 text-gray-500">
                    {book.votes}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mt-3">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
///********************************************************************************************* *////
// pages////////////////////////////////////////////////////
  const Page1: React.FC = ()=>{
  return (
    <div className="font-sans overflow-x-hidden">
    <Header
      title="READ AND ADD YOUR INSIGHT"
      subtitle="Find Your Favorite Book And Read It Here For Free"
      placeholder="Search Book"
      orangeBackground={orangeBackground}
      image={excitedReader}
    />
    <main className="flex">
      <Sidebar />
      <div className="w-full">
        <div className="p-6 bg-gray-50 mt-14 shadow-sm mb-12">
          <BooksGrid section={booksData[0]}/>
          <BooksGrid section={booksData[1]}/>
        </div>
        <div className="p-6 bg-gray-50 mt-14 shadow-sm mb-12">
          <BooksGrid section={booksData[2]}/>
          <BooksGrid section={booksData[3]}/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
  );
};
const Page2: React.FC = ()=>{
  return (
    <div className="font-sans">
    <Header
          title="READ AND ADD YOUR INSIGHT"
          subtitle="Find Your Favorite Book And Read It Here For Free"
          placeholder="Search Book"
          orangeBackground={orangeBackground}
          image={excitedReader}
        />
        <main className="flex">
        <Sidebar />
    <Shop/>
    </main>
    <Footer />
      </div>
  );
};
const Page3: React.FC = ()=>{
  return (
    <div className="font-sans">
    <Header 
      title="BLOG MYBOOK"
      subtitle="Lightweight Article Where Discussing Matters Relating 
      To The Book"
      placeholder="Search Book"
      orangeBackground={orangeBackground}
      image={bookimage}
    />
    <ImageGrid/>
    <Footer />
      </div>
  );
};
const Page4: React.FC = ()=>{
  return (
    <Signup/>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Page1/>}></Route>
      <Route path="/shop" element={<Page2/>}></Route>
      <Route path="/blog" element={<Page3/>}></Route>
      <Route path="/singup" element={<Page4/>}></Route>
    </Routes>
    </Router>

  );
};
export default App;
