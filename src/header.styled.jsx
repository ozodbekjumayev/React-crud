import styled from "styled-components";

const Navbar = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #333;
`;
const Title = styled.div`
  font-size: 30px;
  color: beige;
  font-weight: 700;
  letter-spacing: 4px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 20px;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  outline: none;
`;
const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Number = styled.div`
  font-size: 30px;
  color: beige;
`;
const SearchBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #3794b9;
  color: beige;
  cursor: pointer;
`;

// #######################################

const HeaderBlock = styled.div`
  width: 1000px;
  margin: 20px auto;
  background-color: #333;
  padding: 20px 10px;
`;
const NameAdd = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const OutUsers = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  background-color: white;
`;
const OutUsersBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const OutUsersID = styled.div`
  font-size: 30px;
  letter-spacing: 2px;
`;
const OutUsersUsers = styled.div`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.5px;
`;
const BtnDelete = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: red;
  color: beige;
  cursor: pointer;
`;
const BtnEdit = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: green;
  color: beige;
  cursor: pointer;
`;
export {
  Navbar,
  Title,
  Input,
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
};
