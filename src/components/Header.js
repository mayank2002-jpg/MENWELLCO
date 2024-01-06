import React from "react";
import logo from "../assets/images/logo.jpg";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10%",
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [opens, setOpens] = React.useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);
  // const classes = useStyles();
  return (
    <>
      <nav className=" w-full container mx-auto px-4">
        <div className="flex mt-5 justify-between">
          <Link to="/">
            <img className="w-24 rounded-full" src={logo} alt="logo" />
          </Link>
          <div>
            <span>
              <CallIcon className="text-yellow-400" />
              9992228822
            </span>
            <Link to="/contact">
              <button className="bg-yellow-400 rounded-md p-3 border-none cursor-pointer font-medium mx-6">
                Book Free Appointment
              </button>
            </Link>
          </div>
        </div>

        <Box className="flex justify-end -my-10 space-x-4 px-6">
          <Box>
            <button
              onClick={handleOpen}
              className="bg-green-500 rounded-md p-2 w-24 text-white font-medium"
            >
              Login
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Sign in to our platform
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Box className="p-4 md:p-5">
                    <form className="space-y-4" action="#">
                      <Box>
                        <label
                          for="email"
                          className="block mb-2 text-bold text-xl font-medium dark:text-black"
                        >
                          Your email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                          placeholder="Enter your email"
                          required
                        />
                      </Box>
                      <Box>
                        <label
                          for="password"
                          className="block mb-2 text-bold text-xl font-medium dark:text-black"
                        >
                          Your password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter Your Password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                          required
                        />
                      </Box>
                      <Box className="flex justify-between">
                        <Box className="flex items-start">
                          <Box className="flex items-center h-5">
                            <input
                              id="remember"
                              type="checkbox"
                              value=""
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                              required
                            />
                          </Box>
                          <label
                            for="remember"
                            className="ms-2 text-sm font-medium dark:text-black"
                          >
                            Remember me
                          </label>
                        </Box>
                        <a
                          href="#"
                          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Forgot Password?
                        </a>
                      </Box>
                      <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Login to your account
                      </button>
                      <Box className="text-sm font-medium text-gray-500 dark:text-black">
                        Not registered?{" "}
                        <a
                          href="#"
                          className="text-blue-700 hover:underline dark:text-blue-500"
                        >
                          Create account
                        </a>
                      </Box>
                    </form>
                  </Box>
                </Typography>
              </Box>
            </Modal>
          </Box>
          <Box>
            <button
              onClick={handleOpens}
              className="bg-yellow-400 rounded-md p-2 w-24 text-black font-medium"
            >
              SignUp
            </button>
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default Header;
