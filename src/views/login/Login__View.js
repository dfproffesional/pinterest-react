import React from "react";
import { Login__Layout as Layout } from "../../layouts/login/Login__Layout";
import { Header__Menu as Menu } from "../../components/Header__Menu";
import { Header__Logo as Logo } from "../../components/Header__Logo";

import { Colash__Item as Colash } from "../../components/login/Colash__Item";

import { Content__Title as Title } from "../../components/login/Content__Title";

export default function Login__View() {
  return (
    <>
      <Layout>
        <Logo />
        <Menu />
        <Title />
        <Colash />
      </Layout>
    </>
  );
}
