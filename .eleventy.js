module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
      "html",
      "css"
    ]);
  };

module.exports = {
    dir: {
        input: "src",
    }
};

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");
  };