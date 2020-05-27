import React, { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import logo from "../assets/country.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [list, setlist] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [country, setcountry] = useState("");

  const user = useSelector((state) => state.user.loggedIn);

  const fetchdata = async () => {
    const url = "https://restcountries.eu/rest/v2/all";
    const data = await axios.get(url);
    data ? setlist(data) : setlist([]);
    setClicked(true);
  };

  const content = (element, index) => {
    if (element.name) {
      return (
        <div key={index} className="country">
          <Card key={index}>
            <img
              alt=""
              style={{ width: "18rem", height: "10rem" }}
              src={element.flag}
            />
            <div>
              <h5>{element.name.substr(0, 14)}</h5>
              <p>{`Capital:${element.capital}`}</p>
              <p>{`Currency:${element.currencies[0].name}`}</p>
              <p>{`Region:${element.region}`}</p>
              <Button
                target="_blank"
                href={`https://en.wikipedia.org/wiki/${element.name}`}
                variant="link"
              >
                More Info
              </Button>
            </div>
          </Card>
        </div>
      );
    }
  };
  const clickMe = () => {
    return (
      <div className="Clickbutton">
        <Button variant="info" disabled={!user} onClick={fetchdata}>
          Click Me To Fetch Data Of Countries
        </Button>
      </div>
    );
  };

  const handlefilteredCountry = (e) => {
    setcountry(e.target.value);
  };

  const Search = (list, clicked) => {
    if (clicked && list) {
      return (
        <div className="Search-country">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Search here.."
              onChange={handlefilteredCountry}
            />
          </InputGroup>
        </div>
      );
    }
    return null;
  };

  const rendercountry = (list) => {
    const countiesArray = list.data;
    const filteredCountries = countiesArray.filter((a) => {
      return a.name.toLowerCase().indexOf(country.toLowerCase()) !== -1;
    });
    if (filteredCountries.length > 0) {
      return filteredCountries.map((element, index) => content(element, index));
    } else {
      return (
        <div className="No-data">
          <div>No Data...</div>{" "}
        </div>
      );
    }
  };

  return (
    <div className="homecomponent">
      <div className="backgroun-image">
        <img src={logo} alt="" />
      </div>
      {Search(list, clicked)}
      {!_.isEmpty(list) && clicked ? rendercountry(list) : clickMe()}
    </div>
  );
};

export default Home;
