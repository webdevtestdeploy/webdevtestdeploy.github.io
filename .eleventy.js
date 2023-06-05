module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("source/**/*.jpg");
  eleventyConfig.addPassthroughCopy("source/**/*.png");
  eleventyConfig.addPassthroughCopy("source/**/*.css");
  eleventyConfig.addPassthroughCopy("source/**/*.js");
  eleventyConfig.addPassthroughCopy("source/**/*.mov");
  eleventyConfig.addPassthroughCopy("source/content");
  eleventyConfig.addPassthroughCopy("source/images");
  eleventyConfig.addPassthroughCopy("source/plugins");
  eleventyConfig.addPassthroughCopy("source/media");
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });
  
  return {
    dir: {
      input: "source",
      output: "destination",
      includes: "_includes",
      layouts: "_layouts",
      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "liquid",
    },
  };
};
