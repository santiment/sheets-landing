@Library('podTemplateLib')
import net.santiment.utils.podTemplates


properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '30', artifactNumToKeepStr: '', daysToKeepStr: '30', numToKeepStr: ''))])

slaveTemplates = new podTemplates()

slaveTemplates.dockerTemplate { label ->
  node('label') {
    stage('Build') {
      container('docker') {
        def scmVars = checkout scm
        def gitHead = scmVars.GIT_COMMIT.substring(0,7)

        if (env.BRANCH_NAME == "master") {
          withCredentials([
            string(
              credentialsId: 'SECRET_KEY_BASE',
              variable: 'SECRET_KEY_BASE'
            ),
            string(
              credentialsId: 'aws_account_id',
              variable: 'aws_account_id'
            )
          ]) {
            def awsRegistry = "${env.aws_account_id}.dkr.ecr.eu-central-1.amazonaws.com"
            docker.withRegistry("https://${awsRegistry}", "ecr:eu-central-1:ecr-credentials") {
              sh "docker build -t ${awsRegistry}/sheets-landing:${env.BRANCH_NAME} -t ${awsRegistry}/sheets-landing:${scmVars.GIT_COMMIT} ."
              sh "docker push ${awsRegistry}/sheets-landing:${env.BRANCH_NAME}"
              sh "docker push ${awsRegistry}/sheets-landing:${scmVars.GIT_COMMIT}"
            }
          }
        }
      }
    }
  }
}
