import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { AddToFav } from "./App";

function Card() {
  const [user, setUser] = useState([]);
  const [favCard, setfavCard] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function favCards(index, data) {
    const hasElementInFav = favCard.some((item) => item.id === data.id);
    if (hasElementInFav) {
      return;
    }
    setfavCard((prv) => {
      return [...prv, data];
    });
  }

  return (
    <>
      {user.map((data, index) => (
        <div key={data.id} className="container">
          <div>
            <h4> Name : {data.name + " " + data.username}</h4>
            <p>
              <b>Website : </b>
              {data.website}
              <br />
              <span>
                <b>Phone :</b>
                {data.phone}
              </span>
              <br />
              <span>
                {" "}
                <b>Email : </b>
                {data.email}
              </span>
            </p>
          </div>
          <div>
            <Button
              style={{ backgroundColor: "rgb(194 93 219)", margin: "10px" }}
              onClick={() => {
                favCards(index, data);
              }}
            >
              Add to Fav
            </Button>
            <br />
          </div>
        </div>
      ))}

      <AddToFav data={favCard} />
    </>
  );
}

export { Card };
