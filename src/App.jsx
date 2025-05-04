import { Routes, Route, Navigate } from "react-router-dom";
import mainRoutes from "./routes";
import { Suspense } from "react";
import Layout from "components/layout";
import PreLoader from "components/common/Preloader";

const App = () => {
  return (
    <Layout>
      <Routes>
        {mainRoutes?.map((item) => (
          <Route
            key={item.title}
            path={item.path}
            element={
              <Suspense fallback={<PreLoader />}>
                <item.component />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;
