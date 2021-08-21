import React, { useState } from 'react';
import Head from "next/head";
import Layout from "../components/layout/Layout";
import MainSection from "../components/main/MainSection";
import RightSideBar from "../components/layout/RightSideBar";
import classes from "../components/layout/Layout.module.css";

import { Fragment } from "react";

const HomePage = () => {
  const [open, isOpen] = useState(false);
  const [form, setForm] = useState(true);

  const signUp = () => {
    isOpen(true);
    setForm(true);
  };

  const getInTouch = () => {
    isOpen(true);
    setForm(false);
  };

  const closeRightSideBar = () => {
    isOpen(false);
  };

  return (
    <Fragment>
      <Head>
        <title> Holding Page </title>
        <meta
          name="description"
          content="Holding page for trial app"
        ></meta>
      </Head>
      <Layout>
        { !open ? false : <RightSideBar activeForm={form} close={closeRightSideBar} />  }
        
        <MainSection className={classes.main} firstForm={signUp} secondForm={getInTouch} />
      </Layout>
    </Fragment>
  );
}

export default HomePage;