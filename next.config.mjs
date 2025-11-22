/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'personal-portfolio-website'

const nextConfig = {
	// Export static HTML for GitHub Pages
	output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	// Prefix paths when served from project pages
	basePath: isProd ? `/${repoName}` : '',
	assetPrefix: isProd ? `/${repoName}/` : '',
	trailingSlash: true,
}

export default nextConfig
