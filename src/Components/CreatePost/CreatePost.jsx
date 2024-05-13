import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import "./CreatePost.css";
import { AuthContext } from "../../Context/Context";
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

const navigate = useNavigate()

  const { user } = useContext(AuthContext);
  const date = new Date();
  const handleClick = async () => {
    if (!name || !category || !price || !place || !image) {
      setError("All feilds are manadatory");
      return;
    }
    setError("");
    if (hasError) {
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `products/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);
    console.log(imageUrl);

    const productRef = collection(db, "products");
    await addDoc(productRef, {
      name,
      category,
      price,
      place,
      imageUrl,
      userId: user.uid,
      createdAt: date.toDateString(),
    });
     navigate('/')
  };

  return (
    <>
      <Header />
      <>
        <div className="centerDiv">
          <h2 style={{ textAlign: "center" }}>Create Post</h2>
          <form>
            <label>Name/Brand</label>
            <br />
            <input
              className="input"
              type="text"
              name="Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Category</label>
            <br />
            <input
              className="input"
              type="text"
              name="category"
              required={true}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label>Price</label>
            <br />
            <input
              className="input"
              type="number"
              name="Price"
              required={true}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setHasError(e.target.value <= 0);
              }}
            />
            {hasError && (
              <p style={{ color: "red" }}>Price Should be positive</p>
            )}
            <br />
            <label>Place</label>
            <br />
            <input
              className="input"
              type="text"
              name="Place"
              required={true}
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="190px"
            height="170px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required={true}
          />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleClick} className="uploadBtn">
            Upload and Submit
          </button>
        </div>
      </>
    </>
  );
};

export default CreatePost;
