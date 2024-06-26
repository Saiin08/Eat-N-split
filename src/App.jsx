import { useState } from "react";
import "./App.css";
import FormAddFriend from "./FormAddFriend";
import Friends from "./Friends";
import SplitBill from "./SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [myFriends, setMyFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setMyFriends((myFriends) => [...myFriends, friend]);
  };

  const handleSelection = (friend) => {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  };

  const handleSplitBill = (value) => {
    console.log(value);
    setMyFriends((myFriends) =>
      myFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <Friends
            myFriends={myFriends}
            selectedFriend={selectedFriend}
            onSelection={handleSelection}
          />

          <FormAddFriend onAddFriend={handleAddFriend} />
        </div>
        {selectedFriend && (
          <SplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
