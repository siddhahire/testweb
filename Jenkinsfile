pipeline {
    agent any

    stages {
  
        stage('Build Docker Images') {
            steps {
                sh 'sudo -S docker build -t my-frontend-image ./frontend'  // Replace with your frontend directory path
            }
        }
        stage('Deploy Containers') {
            steps {
                sh 'sudo -S docker run -d --name my-frontend my-frontend-image'
            }
        }
    }
}
