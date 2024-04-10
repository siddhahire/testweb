pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                script {
                    // Run Python Selenium script
                    def output = sh(script: 'python3 test_script.py', returnStdout: true).trim()
                    println "Output of test_script.py: ${output}"
                    // Check the output to determine the test condition
                    if (output.contains('Passed')) {
                        currentBuild.result = 'SUCCESS'
                    } else {
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
        
  
        stage('Build Docker Images') {
             when {
                expression {
                    // Only run the Deployment stage if the Test stage was successful
                    return currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                sh 'sudo -S docker build -t my-frontend-image ./frontend'  // Replace with your frontend directory path
            }
        }
        stage('Deploy Containers') {
             when {
                expression {
                    // Only run the Deployment stage if the Test stage was successful
                    return currentBuild.result == 'SUCCESS'
                }
            }
            steps {
                sh 'sudo -S docker run -d -p 80:80 --name my-frontend my-frontend-image'
            }
        }
    }
}
