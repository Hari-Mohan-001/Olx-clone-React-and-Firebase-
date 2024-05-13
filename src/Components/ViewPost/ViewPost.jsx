import React, { useContext, useEffect, useState } from "react";
import "./ViewPost.css";
import { viewPostContext } from "../../Context/ViewPostContext";
import { query, where, getDocs, collection, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";

const ViewPost = () => {
  const { PostDetails } = useContext(viewPostContext);

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const { userId } = PostDetails;
    const getDetails = async () => {
      const queryResult = query(
        collection(db, "users"),
        where("id", "==", userId)
      );

      const result = await getDocs(queryResult);
      console.log("res" + result);
      if (result.docs.length) {
        const userDocRef = result.docs[0].ref;
        const userSnapshot = await getDoc(userDocRef);

        if (userSnapshot) {
          setUserDetails(userSnapshot.data());
        } else {
          console.log("not found");
        }
      }
    };
    getDetails();
  }, [PostDetails]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={PostDetails.imageUrl} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{PostDetails.price}</p>
          <span>{PostDetails.name}</span>
          <p>{PostDetails.category}</p>
          <span>{PostDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          {userDetails && <p>{userDetails.Username}</p>}
          {userDetails && <p>{userDetails.phoneNumber}</p>}
          <br />
          <div
            style={{
              width: "150px",
              height: "25px",
              border: "2px solid",
              borderRadius: "5px",
            }}
          >
            <h4>Chat With seller</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
