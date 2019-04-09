pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
                  sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
                    sh './jenkins/scripts/test.sh'
                }
            }
        }
        stage('Deliver') {
            steps {
                withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                    sh './jenkins/scripts/kill.sh'
                }
            }
        }
    }
}
