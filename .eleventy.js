module.exports = function (eleventyConfig) {
  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/images');

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
