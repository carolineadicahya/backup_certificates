// // import { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Form from "./components/Forms";
// import Dropdown from "./components/Dropdown";
// import Login from "./pages/Login";
// import Layout from "./components/TestComponents";
// import DocumentType from "./pages/users/DocumentType";
// import CertificateType from "./pages/users/CertificateType";

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar />

//       {/* Form */}
//       {/* <Form /> */}

//       {/* {Dropdown} */}
//       {/* <Dropdown /> */}

//       {/* login */}
//       {/* <Login /> */}

//       {/* Layout */}
//       {/* <Layout /> */}

//       {/* Jenis Dokumen */}
//       {/* <DocumentType /> */}

//       {/* Alert Dialog */}
//       {/* <AlertDialog /> */}

//       {/* Jenis Sertifikat */}
//       <CertificateType />

//       {/* <h1 className="text-white">Hello World</h1> */}
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import DocumentType from "./pages/users/DocumentType";
import CertificateType from "./pages/users/CertificateType";
import { Route, Routes } from "react-router-dom";
import Error404 from "./pages/ErrorPage";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import FormPage from "./components/TestComponents";
import Dashboard from "./pages/users/Dashboard";
import AllCertificates from "./pages/users/AllCertificates";
import FormType from "./pages/users/FormTypes";
import AllUsers from "./pages/admin/AllUsers";
import AdminDashboard from "./pages/admin/DashboardAdmin";

function App() {
  return (
    <Routes>
      {/* Public page (tanpa navbar) */}
      <Route path="/" element={<LoginPage />} />

      {/* Private pages (dengan Navbar) */}
      <Route element={<Layout />}>
        {/* Users */}
        <Route path="/users/dashboard" element={<Dashboard />} />
        <Route path="/users/document-type" element={<DocumentType />} />
        <Route path="/users/certificate-type" element={<CertificateType />} />
        <Route path="/users/all-certificates" element={<AllCertificates />} />
        <Route path="/users/form" element={<FormPage />} />
        <Route path="/users/form-type" element={<FormType />} />
        <Route path="/users/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/all-users" element={<AllUsers />} />
      </Route>

      {/* Global 404 — HARUS DI LUAR Layout */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
