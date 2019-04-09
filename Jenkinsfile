pipeline {
    def versionNum = params.VERSION_NUMBER != null ? params.VERSION_NUMBER : '1.0.0'
    def buildNumber = params.VERSION_CODE != null ? params.VERSION_CODE : '100'
    
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('checkout') {
            checkout scm
        }
        stage('Build') {
            echo "config with ${versionNum} env ${buildNumber}"
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
