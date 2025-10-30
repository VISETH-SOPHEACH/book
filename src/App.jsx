import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import Qr from "./components/Qr";
import img1 from "./assets/img/btes.jpg";
import img2 from "./assets/img/jk.jpg";
import img3 from "./assets/img/kl.jpg";
import img4 from "./assets/img/t.jpg";
import img5 from "./assets/img/ag.jpg";
import img6 from "./assets/img/aj.jpg";
import img7 from "./assets/img/k.jpg";
import img8 from "./assets/img/sr.jpg";
import img9 from "./assets/img/ok.jpg";
import img10 from "./assets/img/nh.jpg";
import img11 from "./assets/img/enemy.png";
import img12 from "./assets/img/try.png";

function App() {
  const [cart, setCart] = useState([]);

  const books = [
    {
      id: 1,
      title: "ស្រីហិតោបទេស",
      price: 99,
      img: img1,
      lk: "https://online.fliphtml5.com/mwlbx/qkue/#p=1",
    },
    {
      id: 2,
      title: "ចរិតខ្មែរ",
      price: 99,
      img: img2,
      lk: "https://sokheounpang.wordpress.com/wp-content/uploads/2008/02/charetkhmer.pdf",
    },
    {
      id: 3,
      title: "នរណាជាឃាតកររាស្ត្រខ្មែរ ",
      price: 99,
      img: img3,
      lk: "https://www.elibraryofcambodia.org/wp-content/uploads/2014/03/No-Na-Chea-Kheatkor-eBook.pdf",
    },
    {
      id: 4,
      title: "កំពប់តែអុង",
      price: 99,
      img: img4,
      lk: "https://drive.google.com/file/d/1RAxqicsl2AARoFduWRLHlVCvaBAJdF-G/view?fbclid=IwY2xjawNlGhVleHRuA2FlbQIxMABicmlkETFFZGNIdUJCZHluc1htV3duAR7PyLh8J1GuepRXJoFs69RO-VlY---8Jy4RpePs1eJh8O_ph6ipovDOrcJMMA_aem_i08Dj_7DfpTons2YLuXiwg&pli=1",
    },
    {
      id: 5,
      title: "អង្គការជានរណា ",
      price: 99,
      img: img5,
      lk: "https://www.elibraryofcambodia.org/ebook/angkar-chea-nona-pheak-ti-1-ebook/",
    },
    {
      id: 6,
      title: "ជីវប្រវត្តិអាចារ្យ ហែម ចៀវ",
      price: 99,
      img: img6,
      lk: "https://www.elibraryofcambodia.org/wp-content/uploads/2014/03/chiveak-browat-preas-acha-hemcheav.pdf",
    },
    {
      id: 7,
      title: "គុកនយោបាយ",
      price: 99,
      img: img7,
      lk: "https://elibrary.maff.gov.kh/assets/files/books/e831a3d346c0c512479f2b205e37399c1605234836.pdf",
    },
    {
      id: 8,
      title: "ស្រណោះព្រលឹងខ្មែរ",
      price: 99,
      img: img8,
      lk: "https://www.elibraryofcambodia.org/ebook/srornos-prolerng-khmer-ebook/",
    },
    {
      id: 9,
      title: "ឧកញ៉ាសឺន គុយ",
      price: 99,
      img: img9,
      lk: "https://elibrary.maff.gov.kh/assets/files/books/d03c186c62c490145c90d2b819b3cf7f1605234492.pdf",
    },
    {
      id: 10,
      title: "ញ្ញាណទស្សនៈ",
      price: 99,
      img: img10,
      lk: "https://www.scribd.com/document/489540158/%E1%9E%9C%E1%9E%B7%E1%9E%89-%E1%9E%89%E1%9E%B6%E1%9E%8E%E1%9E%91%E1%9E%9F-%E1%9E%9F%E1%9E%93%E1%9F%88",
    },
    {
      id: 11,
      title: "សត្រូវបងប្អូនឯង",
      price: 99,
      img: img11,
      lk: "https://drive.google.com/file/d/0B1dv5sqSPsPbT19lTkpJRld2QXc/view?fbclid=IwY2xjawNthitleHRuA2FlbQIxMABicmlkETFyUkF5Q3VrZ282MU5sSXNqAR6CFU85WLEy5YV7ggYMpy3tj_YSKSvFG5m_rs9rGxJRHoQyKVNAgB63P80YCA_aem_s3Ye7EVj0rLjPiBCuRWJxg&resourcekey=0-rF81dWwxPxiBjLTwp9ap8w",
    },
    {
      id: 12,
      title: "ប្រវត្តិអ្នកតស៊ូខ្មែរ",
      price: 99,
      img: img12,
      lk: "https://drive.google.com/file/d/1ATd_C8pteZiWr0mjBEdKVXABcnAlzspu/view?fbclid=IwY2xjawNthlNleHRuA2FlbQIxMABicmlkETFyUkF5Q3VrZ282MU5sSXNqAR6sz2zqVYGjO6FPlz_G-jg-eaS12sVPhgKNuZNZfVKQQMmNs9moqzUK59Sd_w_aem_JAbNR_l3LejNsDmf4swFQQ",
    },
  ];

  // Add book to cart
  const addToCart = (book) => {
    setCart((prev) => [...prev, { ...book, cartId: Date.now() }]);
  };

  // Remove book from cart
  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  return (
    <Router>
      <Navbar />
      <main className="pt-15">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Book data={books} addToCart={addToCart} />
              </>
            }
          />
          <Route
            path="/books"
            element={<Book data={books} addToCart={addToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          >
            <Route path="qr" element={<Qr />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;