import { useState } from "react";

export default function FormAddFriend({ onAddFriend }) {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleClick = () => {
    setShowAddFriend((show) => !show);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: crypto.randomUUID(),
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
    setShowAddFriend(false);
  };

  return (
    <>
      {showAddFriend ? (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label>💁🏻‍♂️ Friend name</label>
          <input type="text" value={name} onChange={handleNameChange} />

          <label>👤 Image URL</label>
          <input type="text" value={image} onChange={handleImageChange} />

          <button className="button">Add</button>
        </form>
      ) : (
        ""
      )}

      <button className="button" onClick={handleClick}>
        {showAddFriend ? "close" : "AddFriend"}
      </button>
    </>
  );
}
