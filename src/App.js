"use client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home/Home";
import Footer from "./components/Footer";
import About from "./About/About";
import Adminuniversity from "./components/Admin/Adminuniversity";
import Kyrgystan from "./components/Abroad/Kyrgystan";
import Karnataka from "./components/Statecollege/Karnataka";
import CollegePage from "./components/Collegepage/Collegepage";
import Assam from "./components/Statecollege/Assam";
import Kerala from "./components/Statecollege/Kerala";
import Punjab from "./components/Statecollege/Punjab";
import Orissa from "./components/Statecollege/Orissa";
import Delhi from "./components/Statecollege/Delhi";
import Haryana from "./components/Statecollege/Haryana";
import Bihar from "./components/Statecollege/Bihar";
import Goa from "./components/Statecollege/Goa";
import Gujarat from "./components/Statecollege/Gujarat";
import Maharashtra from "./components/Statecollege/Maharashtra";
import Meghalaya from "./components/Statecollege/Meghalaya";
import Mizoram from "./components/Statecollege/Mizoram";
import Rajasthan from "./components/Statecollege/Rajasthan";
import Sikkim from "./components/Statecollege/Sikkim";
import Telangana from "./components/Statecollege/Telangana";
import Uttarakhand from "./components/Statecollege/Uttarakhand";
import Uttarpradesh from "./components/Statecollege/Uttarpradesh";
import Adminblog from "./components/Admin/Adminblog";
import Blog from "./components/Blogs/Blog";
import Russia from "./components/Abroad/Russia";
import Bangladesh from "./components/Abroad/Bangladesh";
import Philippines from "./components/Abroad/Philippines";
import Georgia from "./components/Abroad/Georgia";
import Westbengal from "./components/Statecollege/Westbengal";
import Madhyapradesh from "./components/Statecollege/Madhyapradesh";
import Tamilnadu from "./components/Statecollege/Tamilnadu";
import Arunachalpradesh from "./components/Statecollege/Arunachalpradesh";
import Andhrapradesh from "./components/Statecollege/Andhrapradesh";
import Nepal from "./components/Abroad/Nepal";
import Register from "./Register/Register";
import PaymentForm from "./components/Payment/PaymentForm";
import SingleBlogPage from "./components/Blogs/SingleBlogPage";
import Login from "./Register/Login";

import AddBlog from "./components/Blog/AddBlog";

import Contact from "./Contact/contact1";
import PdfViewer from "./components/Pdf.Viewer";
import Cutoff from "./components/cutoff/Cutoff";
import RequireAuth from "./AuthContext/RequireAuth";
import Dashboard from "./Admin/Dashboard";
import SimpleSidebar from "./Admin/Dashboard";
import UserViewTable from "./Admin/UserViewTable";
import ContactUsPage from "./Admin/ContactUsPage";
import UpdateUniversity from "./Admin/UpdateUniversity";
import EditUniversity from "./Admin/EditUniversity";
import Facebook from "./Facebook";
import Jharkhand from "./components/Statecollege/Jharkhand";
import Chattisgarh from "./components/Statecollege/Chattisgarh";
import VisitorCounter from "./Home/visitors";
import TrackUser from "./TrackUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Facebook /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminuniversity" element={<Adminuniversity />} />
          {/* <Route path="/" element={<Adminuniversity />} /> */}
          <Route path="/state/Karnataka" element={<Karnataka />} />
          <Route path="/state/Assam" element={<Assam />} />
          <Route path="/state/Kerala" element={<Kerala />} />
          <Route path="/state/Punjab" element={<Punjab />} />
          <Route path="/state/Orissa" element={<Orissa />} />
          <Route path="/state/Delhi" element={<Delhi />} />
          <Route path="/state/Bihar" element={<Bihar />} />
          <Route path="/state/Chattisgarh" element={<Chattisgarh />} />
          <Route path="/state/Jharkhand" element={<Jharkhand />} />
          <Route path="/state/Goa" element={<Goa />} />
          <Route path="/state/Gujarat" element={<Gujarat />} />
          <Route path="/state/Maharashtra" element={<Maharashtra />} />
          <Route path="/state/Meghalaya" element={<Meghalaya />} />
          <Route path="/state/Mizoram" element={<Mizoram />} />
          <Route path="/state/Rajasthan" element={<Rajasthan />} />
          <Route path="/state/Sikkim" element={<Sikkim />} />
          <Route path="/state/Telangana" element={<Telangana />} />
          <Route path="/state/Uttarakhand" element={<Uttarakhand />} />
          <Route path="/state/Uttar Pradesh" element={<Uttarpradesh />} />
          <Route
            path="/state/Madhya Pradesh"
            element={<Madhyapradesh />}
          ></Route>
          <Route
            path="/state/Arunachal Pradesh"
            element={<Arunachalpradesh />}
          ></Route>
          <Route
            path="/state/Andhra Pradesh"
            element={<Andhrapradesh />}
          ></Route>
          <Route path="/register/user" element={<Register />}></Route>
          <Route path="/login/user" element={<Login />}></Route>

          <Route path="/add/blog" element={<AddBlog />}></Route>

          <Route path="/contact1" element={<Contact />}></Route>

          <Route path="/state/Tamil Nadu" element={<Tamilnadu />}></Route>
          <Route path="/state/West Bengal" element={<Westbengal />} />
          <Route path="/Adminblog" element={<Adminblog />} />
          <Route path="/blogs" element={<Blog />}></Route>
          <Route
            path="/blogs/singleblogpage/:id"
            element={<SingleBlogPage />}
          />

          <Route path="/medical/Kyrgystan" element={<Kyrgystan />} />
          <Route path="/medical/Bangladesh" element={<Bangladesh />} />
          <Route path="/medical/Russia" element={<Russia />} />
          <Route path="/medical/Philippiness" element={<Philippines />} />
          <Route path="/medical/Georgia" element={<Georgia />} />
          <Route path="/medical/Nepal" element={<Nepal />} />
          <Route path="/state/Delhi" element={<Delhi />} />
          <Route path="/colleges/:collegename" element={<CollegePage />} />

          <Route path="/payment" element={<PaymentForm />}></Route>
          <Route
            path="/pdf/123456789101122"
            element={
              // <RequireAuth>
              <PdfViewer />
              // </RequireAuth>
            }
          ></Route>
          <Route
            path="/cutoff"
            element={
              // <RequireAuth>
              <Cutoff />
              // </RequireAuth>
            }
          ></Route>
          <Route
            path="/admin-dashboard"
            element={
              <RequireAuth>
                <SimpleSidebar />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/user-table"
            element={
              <RequireAuth>
                <UserViewTable />
              </RequireAuth>
            }
          />
          <Route
            path="/contact-us"
            element={
              <RequireAuth>
                <ContactUsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/update-university"
            element={
              <RequireAuth>
                <UpdateUniversity />
              </RequireAuth>
            }
          />
          <Route
            path="/edit-university"
            element={
              <RequireAuth>
                <EditUniversity />
              </RequireAuth>
            }
          />

          <Route path="/VisitorCounter" element={<VisitorCounter />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
