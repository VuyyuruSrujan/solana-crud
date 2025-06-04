// import { AppProviders } from '@/components/app-providers.tsx'
// import { AppLayout } from '@/components/app-layout.tsx'
// import { RouteObject, useRoutes } from 'react-router'
// import { lazy } from 'react'
// import landindpage from './components/landindpage'

// // const links = [
// //   //
// //   { label: 'Home', path: '/' },
// //   { label: 'Account', path: '/account' },
// //   { label: 'Counter Program', path: '/counter' },
// // ]

// // const LazyAccountIndex = lazy(() => import('@/components/account/account-index-feature'))
// // const LazyAccountDetail = lazy(() => import('@/components/account/account-detail-feature'))
// // const LazyCounter = lazy(() => import('@/components/counter/counter-feature'))
// // const LazyDashboard = lazy(() => import('@/components/dashboard/dashboard-feature'))

// // const routes: RouteObject[] = [
// //   { index: true, element: <LazyDashboard /> },
// //   {
// //     path: 'account',
// //     children: [
// //       { index: true, element: <LazyAccountIndex /> },
// //       { path: ':address', element: <LazyAccountDetail /> },
// //     ],
// //   },
// //   { path: 'counter', element: <LazyCounter /> },
// // ]

// // console.log({ links, routes })

// export function App() {
//   // const router = useRoutes(routes)
//   return (
//     <AppProviders>
//       {/* <AppLayout links={links}>{router}</AppLayout> */}
//     </AppProviders>
//   )
// }


// app.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landindpage from "./components/Landindpage";
import { AppProviders } from "@/components/app-providers";

const App: React.FC = () => {
  return (
    <AppProviders>
      <Routes>
        <Route path="/" element={<Landindpage />} />
      </Routes>
    </AppProviders>
  );
};

export default App;


