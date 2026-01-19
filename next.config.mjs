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
	trailingSlash: true,
}

export default nextConfig
