module.exports = {
    productionBrowserSourceMaps: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/Test': { page: '/Test' },
            '/Test1': { page: '/Test1' }

        }
    },
    images: {
        loader: "imgix",
        path: "https://noop/",
    },
    trailingSlash: true,
}
  // module.exports = {
  //   // productionBrowserSourceMaps: true,
  //   exportPathMap: async function (
  //     defaultPathMap,
  //     { dev, dir, outDir, distDir, buildId }
  //   ) {
  //     return defaultPathMap
  //   },
  //   images: {
  //     loader: "imgix",
  //     path: "https://noop/",
  //   },
  //   trailingSlash: true,
  // }
