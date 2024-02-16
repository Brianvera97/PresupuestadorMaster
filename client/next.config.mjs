/** @type {import('next').NextConfig} */
const nextConfig = {
    /* env: {
        REACT_APP_API_DOMAIN: "http://localhost:8000/api",
        REACT_APP_IMG_DOMAIN: "http://localhost:8000/img",
        REACT_APP_SOCKET_DOMAIN: "http://localhost:8000",
    }, */
    env: {
        REACT_APP_API_DOMAIN: "https://z5vdccfn-8000.brs.devtunnels.ms/api",
        REACT_APP_IMG_DOMAIN: "https://z5vdccfn-8000.brs.devtunnels.ms/img",
        REACT_APP_SOCKET_DOMAIN: "https://z5vdccfn-8000.brs.devtunnels.ms",
    },
};

export default nextConfig;