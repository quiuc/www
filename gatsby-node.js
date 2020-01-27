const path = require('path');

// routes that should point to the index page
const INDEX_REDIRECT_ROUTES = ['/about', '/people', '/events', '/contact'];

exports.createPages = async ({ actions }) => {
	const { createPage } = actions;

	// Create pages for each route that direct to the index page.
	const IndexPage = path.resolve('src/pages/index.js');
	INDEX_REDIRECT_ROUTES.forEach(route => {
		createPage({
			path: route,
			component: IndexPage
		});
	});
};
