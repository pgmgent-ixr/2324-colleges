// External modules
import { Route, Routes } from 'react-router-dom';

// Import the webfonts via fontsource
import '@fontsource-variable/open-sans';
import '@fontsource-variable/raleway';

// Import custom modules
import { Header } from './components/layout';
import { ROUTES } from './routes';
import { AboutPage, BlogPage, BlogPostPage, ContactPage, HomePage } from './pages';
import { HygraphProvider } from './services';

function App() {
  return (
    <HygraphProvider>
      <div className="app">
        <Header />
        <main className={`main`}>
          <Routes>
            <Route path={ROUTES.Home} element={<HomePage />} />
            <Route path={ROUTES.About} element={<AboutPage />} />
            <Route path={ROUTES.Contact} element={<ContactPage />} />
            <Route path={ROUTES.Blog}>
              <Route index element={<BlogPage />} />
              <Route path={ROUTES.BlogPost} element={<BlogPostPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </HygraphProvider>
  );
}

export default App;
