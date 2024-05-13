import React, { useContext, useEffect, useState } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { AuthContext } from "../../Context/Context";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { viewPostContext } from "../../Context/ViewPostContext";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(viewPostContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const productSnapshot = await getDocs(collection(db, "products"));
      const productDetails = productSnapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      console.log(productDetails);
      setProducts(productDetails);
    };
    getData();
  }, []);

  const handleCardClick = (product) => {
    setPostDetails(product);
    navigate("/ViewPost");
  };

  return (
    <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className="card"
                onClick={() => handleCardClick(product)}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.imageUrl} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9;{product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                  <p className="place">{product.place}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
