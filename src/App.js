import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./feture/user";
import {css} from '@emotion/css'

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className={css` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background:linear-gradient(to left,blue, yellow)`
    }>

    <div className={css`width:100%;
    text-align:center;
    margin-bottom:60px;
    `}><h1>List Of Song</h1><hr/></div>
      <div className={css`
  width: 450px;
  height: 100px;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  background-color:green`}>
    <div><h1>Add Album</h1></div>
        <input
          type="text"
          placeholder="Artist Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Album Name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button className={css`background-color:gray;
        &:hover{background-color:lightgray}`}
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add Album
        </button>
      </div>
      <div className={css` margin-top: 20px;`}>
        {userList.map((user) => {
          return (
            <div key={user.id}className={css`
            width: 400px;
            height: 150px;
            padding: 20px;
            margin: 20px;
            border-radius: 50px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            text-align: center;
            background-color:gray;
            `
            }>
              <h1> <span className={css`color:white;`}>Album : </span>{user.name}</h1>
              <h1><span className={css`color:white;`}>Artist : </span> {user.username}</h1>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update 
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;