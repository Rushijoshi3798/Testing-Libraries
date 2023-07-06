import React, { useState } from "react";

const User = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [listName, setListname] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setMessage("Added");

    setTimeout(() => setListname("API Data Fetched"), 1000);
  };

  const handleChange = (e) => {
    let val = e.target.value;

    if (!isNaN(val) && val.length) {
      setMessage("Not A Number");
    } else {
      setMessage("");
    }
    setName(val);
  };

  return (
    <div>
      <h1>User</h1>
      <p data-testid="success">{message}</p>
      <form>
        <label htmlFor="username-input">username : </label>
        <input
          id="username_input"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br />

        <button onClick={submitForm} disabled={message.length ? true : false}>
          Add
        </button>
      </form>

      {listName ? <p data-testid='fetch_data'>{listName}</p> : null}
    </div>
  );
};

export default User;
