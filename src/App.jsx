import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/admin/Home';
import Dashboard from './pages/admin__dashboard/Dashboard';
import NotFound from './pages/admin__notfound/NotFound';
import Settings from './pages/admin__settings/Settings';
import UserDetail from './pages/admin__users/UserDetail';
import Users from './pages/admin__users/Users';

function App() {
  //1. React Router의 `BrowserRouter`를 설정해야 합니다.
  //2. 메인 페이지에 Home 컴포넌트를 렌더링 해야 합니다.
  //3. /admin에서 Dashboard를 렌더링 해야 합니다. 이는 모든 /admin 경로에서 보입니다.
  //4. /admin/users에서 Users를 렌더링 해야 합니다.
  //5. /admin/users/:id에서 UsersDetail를 렌더링 해야 합니다.
  //6. /admin/settings에서 Settings를 렌더링 해야 합니다.
  //7. /admin/<잘못된 페이지명>에서 NotFound를 렌더링 해야 합니다.

  // /admin에서 Dashboard를 렌더링 해야 합니다. 이는 모든 /admin 경로에서 보입니다.
  // └---->
  // -  Dashboard는 /admin 뿐 아니라 /admin/users, /admin/users/:id, /admin/settings 이런 곳에도 항상 보여야 한다"는 뜻이다.
  // -  Dashboard가 레이아웃의 역할을 하는 부모 컴포넌트가 되고, 다른 컴포넌트들이 자식컴포넌트가 되어야 한다는 뜻이다.
  return (
    <BrowserRouter>
      <Routes>
        {/* Home은 admin이 아니라 그냥 메인 페이지이 */}
        <Route path="/" element={<Home />} />

        {/* 어드민 페이지 컴포넌트의 레이아웃 Layout */}
        {/* Layout.jsx는 admin 경로 전용 레이아웃 */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
