const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginMermaid);
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin)

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      layouts: 'node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    }
  }
};
