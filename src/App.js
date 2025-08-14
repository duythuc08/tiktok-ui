import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
import { publicRoutes } from '~/routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route,index) =>{
                        let Layout = DefaultLayout
                        const Page = route.component
                        if(route.layout){
                            Layout = route.layout //nếu layout != null thì gán = route.layout
                        }else if(route.layout === null){
                            Layout = Fragment //nếu layout = null thì dùng Fragment
                        }
                        return <Route key={index} path={route.path} element={<Layout> <Page/> </Layout>}/> //Page trở thành children props cho DefaultLayout
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
