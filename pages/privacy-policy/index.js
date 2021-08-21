import React from 'react';
import Head from "next/head";

import PrivacyPolicy from "../../components/main/PrivacyPolicy";
import MainMenu from "../../components/navbar/MainMenu";

import { Fragment } from "react";

const PrivacyPolicyPage = () => {

  return (
    <Fragment>
      <Head>
        <title> Privacy Policy </title>
        <meta
          name="description"
          content="Privacy Policy Page"
        ></meta>
      </Head>
      <MainMenu />
      <PrivacyPolicy />
    </Fragment>
  );
}

export default PrivacyPolicyPage;