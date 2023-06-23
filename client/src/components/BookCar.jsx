import { useContext, useEffect, useState } from "react";
import MainCard from "./MainCard";
import { InfoContext } from "../utils/InfoProvider";
import { publicRequest } from "../requestMethods";
import { Box, Pagination } from "@mui/material";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const { setStatus } = useContext(InfoContext);
  const [filterData, setFilterData] = useState({
    page: 1,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await publicRequest.get(`/posts/timeline`);
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        let message = error.response
          ? error.response.data.message
          : error.message;
        setStatus({ open: true, message: message, severity: "error" });
      }
    };
    fetchPosts();
  }, [setStatus]);

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Find a team</h2>
              <form className="box-form">
                {posts.map((p) => (
                  <div className="box-form__card-type">
                    <MainCard key={p._id} post={p} />
                  </div>
                ))}
              </form>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Pagination
                  count={totalPages}
                  onChange={(_, page) => {
                    setFilterData((prevState) => ({
                      ...prevState,
                      page: page,
                    }));
                  }}
                  variant="outlined"
                  color="primary"
                />
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookCar;
