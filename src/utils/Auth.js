export const isLoggedIn = () => {
    return localStorage.getItem('username') & localStorage.getItem('password') ? true : false;
}