import { MAIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, POST_PAGE_ROUTE } from "./utils/consts";
import Main from "./pages/main";
import Shop from './pages/shop';
import Admin from "./pages/admin";
import PostPage from "./pages/postPage";
export const authRoutes = [
    {
        path:MAIN_ROUTE,
        Component: Main,
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: POST_PAGE_ROUTE + '/:id',
        Component: PostPage,
    }
]

export const privateRoutes = [
    {
        path:MAIN_ROUTE,
        Component: Main,
    },
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: POST_PAGE_ROUTE + '/:id',
        Component: PostPage,
    }
]