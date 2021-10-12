const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

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
