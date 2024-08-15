import { React } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './components/layout/index';

function App() {
  const renderPublicRoutes = () => {
    return publicRoutes.map((route, index) => {

      const Page = route.component;

      let Layout

      if (route.layout) {
        Layout = route.layout;
      }

      if (route.layout === null) {
        Layout = Fragment;
      }

      if (!route.layout) {
        Layout = DefaultLayout;
      }

      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    });
  }

  return (
    <Router>
        <div className="App">
                <Routes>
                   {renderPublicRoutes()}
                </Routes>
            </div>
    </Router>
  );
}

export default App;
