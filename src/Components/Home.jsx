import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useContext } from "react";
import { CalculatorContext } from "../context/ForContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Statistics = styled.div`
  display: flex;
  background-color: #ffeed5;
  width: fit-content;
  padding: 10px;
`;

const Income = styled.div`
  background-color: #004466;
  max-width: 50%;
  padding: 10px;
`;

const Consumption = styled.div`
  background-color: #00ff2a;
  max-width: 50%;
  padding: 10px;
`;

const Home = () => {
  const { result } = useContext(CalculatorContext);
  return (
    <>
      <Container>
        <h1>記帳本</h1>
        <h2>2023 / 10 / 11</h2>
        <p>本月：{result}</p>
        <Statistics>
          <Income>當月收入{"[顯示金額]"}</Income>
          <Consumption>當月支付{"[顯示金額]"}</Consumption>
        </Statistics>
        <RouteLink to="/note">
          <Button
            sx={{ padding: "10px", marginTop: "10px" }}
            variant="outlined"
          >
            First list.
          </Button>
        </RouteLink>
      </Container>
    </>
  );
};

export default Home;
