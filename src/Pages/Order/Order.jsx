import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import ourShopBg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Helmet>
        <title>Bistro Boss || MENU</title>
      </Helmet>
      <div>
        <Cover img={ourShopBg} title={"OUR SHOP"}></Cover>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Dessert</Tab>
    <Tab>Soup</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
      </div>
        </div>
    );
};

export default Order;