import React from "react";
import { useRef } from "react";
import { useState } from "react";
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
  OutUsersBlock,
  BtnDelete,
  BtnEdit,
} from "./header.styled";
import { UserContext } from "./Users.context";

export default function Header() {
  const [data, setData] = useContext(UserContext);
  const [text, setText] = useState("");
  const AddBtnClick = () => {
    if (text !== "") {
      setData((e) => [...e, { id: data.length + 1, name: text }]);
      setText("");
    } else {
      alert("Namega soz kirgizing!!!");
    }
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
          <Input
            placeholder="Name.."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <SearchBtn onClick={AddBtnClick}>Add</SearchBtn>
        </NameAdd>
        {data.map((e) => {
          return (
            <OutUsers key={e.id}>
              <OutUsersBlock>
                <OutUsersID>{e.id}</OutUsersID>
                <OutUsersUsers>{e.name}</OutUsersUsers>
              </OutUsersBlock>
              <OutUsersBlock>
                <BtnDelete onClick={() => DeleteBtn(e.id)}>Delete</BtnDelete>
                <BtnEdit>edit</BtnEdit>
              </OutUsersBlock>
            </OutUsers>
          );
        })}
      </HeaderBlock>
    </div>
  );
}
