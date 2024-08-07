/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'standalone'

    basePath: "/resume-site",
    output: 'export'
};

export default nextConfig;

// docker tag local-image:tagname new-repo:tagname
// docker push new-repo:tagname