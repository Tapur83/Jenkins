
pipeline {
    agent any

    environment {
        SONAR_SCANNER_HOME = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Install dependencies
                sh 'npm run build' // Create a production build
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true // Archive the build artifacts
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --coverage' // Run unit tests with coverage
                junit 'junit.xml' // Publish test results (if configured)
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'coverage/lcov-report',
                    reportFiles: 'index.html',
                    reportName: 'Coverage Report'
                ])
            }
        }

        stage('Code Quality Analysis') {
            steps {
                sh 'npm run lint' // Run ESLint
                withSonarQubeEnv('SonarQubeServer') { // SonarQube server configured in Jenkins
                    sh "${SONAR_SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=your-react-project-key -Dsonar.sources=."
                }
            }
        }
    }
}