import React, { Suspense } from "react";
import Layout from "@layouts/Layout";
import Login from "@pages/Login";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import ReactLoading from "react-loading";

export default function AppRoutes() {
  const isAuthenticated = true; // bool, based on token availabilty

  const renderRoute = (route, isAuthenticated) => {
    if (route.isPrivate || isAuthenticated) {
      return route.element;
    }
  };

  return (
    <Suspense
      fallback={
        <ReactLoading
          type={"spinningBubbles"}
          color={"red"}
          height={"50px"}
          width={"50px"}
          delay={3000}
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        />
      }
    >
      <React.Fragment>
        <ScrollTop />
        <Routes>
          {/* ================= All Routes ================ */}
          {routes_here.map((route, key) =>
            !isAuthenticated ? (
              <Route key={key} path="/login" element={<Login />} />
            ) : (
              <Route
                // index
                key={key}
                path={route.path}
                element={
                  <Layout isLienhe={route.path === "/lienhe"}>
                    <Suspense
                      fallback={
                        <ReactLoading
                          type={"spinningBubbles"}
                          color={"#438fff"}
                          height={"50px"}
                          width={"50px"}
                          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                        />
                      }
                    >
                      {renderRoute(route, isAuthenticated)}
                    </Suspense>
                  </Layout>
                }
              />
            )
          )}
        </Routes>
      </React.Fragment>
    </Suspense>
  );
}
