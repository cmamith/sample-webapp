pipeline {
    agent {
        docker {
            image 'docker:latest'
            args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    environment {
        DOCKER_IMAGE = 'amithdocker/sample-webapp:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-credentials', branch: 'main', url: 'https://github.com/cmamith/sample-webapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo 'Deploying container...'
                // Add deployment logic here if needed (e.g., Kubernetes, Docker Run)
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
