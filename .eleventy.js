const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = function (eleventyConfig) {
  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/images');

  // Return work items, sorted by display order
  eleventyConfig.addCollection('work', (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
  });

  // Return the featured work for the home page feed
  eleventyConfig.addCollection('featuredWork', (collection) => {
    return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
      (item) => item.data.featured,
    );
  });

  // Return a collection of blog posts in reverse date order
  eleventyConfig.addCollection('blog', (collection) => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Filters
  eleventyConfig.addFilter('dateFilter', dateFilter);
  eleventyConfig.addFilter('w3DateFilter', w3DateFilter);

  return {
    // defining templating language
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
