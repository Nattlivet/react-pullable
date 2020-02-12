module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPully',
      externals: {
        react: 'React'
      }
    }
  }
}
