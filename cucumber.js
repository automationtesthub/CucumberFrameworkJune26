module.exports = {
  default: {
    requireModule: [
      'ts-node/register'
    ],

    require: [
      'support/**/*.ts',
      'hooks/**/*.ts',
      'step-definitions/**/*.ts'
    ],

    paths: [
      'features/**/*.feature'
    ],

    format: [
      'progress',
      'json:reports/cucumber-report.json',
      "html:reports/cucumber-report.html"
    ],

    publishQuiet: true
  }
};