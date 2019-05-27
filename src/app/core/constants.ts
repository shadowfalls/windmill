import { environment } from '../../environments/environment';

export const constants = {
    canLogin: false,
    currentUser: "",
    baseUrl: environment.baseUrl,
    routeLinks: {
        landingPage: '/',
        categoriesPage: '/topics',
        aboutPage: '/about',
        blogListPage: '/blogs',
        blogPage: '/blog'
    },
    months: {
        0: 'January',
        1: 'Febuary',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
};
