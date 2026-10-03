module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },

  transformIgnorePatterns: ['node_modules/(?!(pinia|vue)/)'],

  moduleFileExtensions: ['js', 'json', 'vue'],

  testMatch: ['<rootDir>/tests/**/*.spec.js'],
}
