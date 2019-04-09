pipeline {
    agent any
    environment {
        CI = 'true'
        versionNum = params.VERSION_NUMBER != null ? params.VERSION_NUMBER : '1.0.0'
        buildNumber = params.VERSION_CODE != null ? params.VERSION_CODE : '100'
    }
    stages {
        stage('Build') {
            echo "config with ${environment.versionNum} env ${environment.buildNumber}"
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
