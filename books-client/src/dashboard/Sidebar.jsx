import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from '../assets/profile.jpg';
import { AuthContext } from '../contexts/AuthProvider';

const SideBar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white md:h-screen">
      <Sidebar aria-label="Sidebar with content separator example" className="h-full">
        <div className="flex items-center justify-center p-4 bg-indigo-700 rounded-b-lg">
          <img src={user?.photoURL|| userImg} alt="User Profile" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
          <span className="ml-3 text-lg font-semibold">{
            user?.diaplayName || "Demo User"}</span>
        </div>
        <Sidebar.Items className="mt-6">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="hover:bg-indigo-600">
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="hover:bg-purple-600">
              Upload Book
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="hover:bg-pink-600">
              Manage Books
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser} className="hover:bg-indigo-600">
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag} className="hover:bg-purple-600">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight} className="hover:bg-pink-600">
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable} className="hover:bg-indigo-600">
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie} className="hover:bg-purple-600">
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards} className="hover:bg-pink-600">
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy} className="hover:bg-indigo-600">
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default SideBar;
