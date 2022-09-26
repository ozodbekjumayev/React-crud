import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import {
  Navbar,
  Input,
  Title,
  Number,
  SearchBtn,
  InputBlock,
  HeaderBlock,
  NameAdd,
  OutUsers,
  OutUsersID,
  OutUsersUsers,
} from "./header.styled";
import { UserContext } from "./Users.context";

export default function Header() {
  const [data, setData] = useContext(UserContext);
  const AddInput = useRef(null);
  const AddBtnClick = () => {
    setData((e) => [
      ...e,
      { id: data.length + 1, name: AddInput.current.value },
    ]);
  };
  const DeleteBtn = (ids) => {
    let result = data.filter((e) => e.id !== ids);
    setData(result);
  };
  return (
    <div>
      <Navbar>
        <Title>Navbar </Title>
        <InputBlock>
          <Input placeholder="Search.." />
          <SearchBtn>Search</SearchBtn>
        </InputBlock>
        <Number>Data length - {"[ " + data.length + " ]"}</Number>
      </Navbar>
      <HeaderBlock>
        <NameAdd>
          <Input placeholder="Name.." ref={AddInput} />
          <SearchBtn onClick={AddBtnClick}>Add</SearchBtn>
        </NameAdd>
        {data.map((e) => {
          return (
            <OutUsers key={e.id}>
              <OutUsersID>{e.id}</OutUsersID>
              <OutUsersUsers>{e.name}</OutUsersUsers>
              <div>
                <button onClick={() => DeleteBtn(e.id)}>Delete</button>
                <button>edit</button>
              </div>
            </OutUsers>
          );
        })}
      </HeaderBlock>
    </div>
  );
}
