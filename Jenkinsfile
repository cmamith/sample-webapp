pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'your-dockerhub-username/simple-webapp:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/cmamith/simple-webapp.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
        stage('Deploy (Optional)') {
            steps {
                echo 'Deploying the container...'
                // You can add kubectl commands if you have a cluster
            }
        }
    }

    post {
        success {
            echo 'Pipeline execution completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
