import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isvisible: true,
    mode: "",
    favCar: "",
  });

  // console.log(formData);

  function changeHandler(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter first name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="Enter last name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />
          <br />
          <br />

          <input
            type="email"
            placeholder="Enter email here"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
          <br />
          <br />

          <textarea
            name="comments"
            placeholder="Enter comments"
            onChange={changeHandler}
            value={formData.comments}
          ></textarea>
          <br />
          <br />

          <input
            type="checkbox"
            id="isvisible"
            onChange={changeHandler}
            name="isvisible"
            checked={formData.isvisible}
          />
          <label htmlFor="isvisible">Am I visible?</label>

          <br />
          <br />

          <input
            type="radio"
            id="online-mode"
            name="mode"
            value="online-mode"
            onChange={changeHandler}
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online Mode</label>
          <input
            type="radio"
            id="offline-mode"
            name="mode"
            value="offline-mode"
            onChange={changeHandler}
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">Offline Mode</label>
          <br />
          <br />
          <label htmlFor="favCar">Tell me your fav car</label>
          <select name="favCar" id="favCar" onChange={changeHandler} value={formData.favCar}>
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="legender">Legender</option>
          <option value="thar">Thar</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
