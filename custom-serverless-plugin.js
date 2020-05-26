class CustomPlugin {
  constructor(serverless, options) {
      this.serverless = serverless;
      this.options = options;

      this.hooks = {
        'before:package:createDeploymentArtifacts': this.beforePackage.bind(this)
      }
  }

  beforePackage() {
      console.log('provider object....')
      console.log(this.serverless.service.provider)
      
      console.log('custom object')
      console.log(this.serverless.service.custom)

      console.log('functions object')
      console.log(this.serverless.service.functions)

      console.log('serverless options object....')
      console.log(this.options)
  }
}

module.exports = CustomPlugin;