import React, { useState } from "react";
import ToolBar from "../toolbar/ToolBar";
import Sidebar from "../sidebar/SideBar";
import BackDrop from "../backdrop/BackDrop";

export default function Bars() {
  const[sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((prevstate) => !prevstate)
  }

  return <>
    <ToolBar openSidebar={toggleSidebar}/>
    <BackDrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
    <Sidebar sidebar={sidebar} closeSidebar={toggleSidebar}/> 
  </>;
}
