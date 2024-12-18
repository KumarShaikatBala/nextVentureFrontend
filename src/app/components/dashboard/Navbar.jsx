import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
import React from "react";
import {Avatar, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";

import Loading from "@/app/components/common/Loading";
import {useAuth} from "@/context/AuthContext";

function Navbar({toggleSidebar}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {user, logout, isLoading} = useAuth();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#DFE8E8] border-b border-gray-200 print:hidden">
            <div className="px-3 py-3 lg:px-5 lg:pl-3 border-b shadow-md">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            onClick={toggleSidebar}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>

                        <Link href="/" className="flex ms-2 gap-2 md:me-24">

                            <span className="self-center text-xl font-semibold whitespace-nowrap ">
                Shaikat Tomal
              </span>
                        </Link>
                    </div>



                    <div className="flex items-center gap-2 ">
                        <div className="text-end">
                            {isLoading ? (
                                <Loading/>
                            ) : (
                                <>
                                    {user && (
                                        <>
                                            <p>{user?.username}</p>
                                        </>
                                    )}
                                </>
                            )}
                        </div>

                        <div>
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? "account-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: "visible",
                                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                        mt: 1.5,
                                        "& .MuiAvatar-root": {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        "&:before": {
                                            content: '""',
                                            display: "block",
                                            position: "absolute",
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: "background.paper",
                                            transform: "translateY(-50%) rotate(45deg)",
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{horizontal: "right", vertical: "top"}}
                                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
                            >


                                <MenuItem >
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <ListItemIcon>
                                            <Logout fontSize="small"/>
                                        </ListItemIcon>
                                        <p
                                           className=" text-[18px]">
                                            Log out
                                        </p>
                                        
                                    </div>
                                </MenuItem>

                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
