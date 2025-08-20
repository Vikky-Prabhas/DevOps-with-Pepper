document.addEventListener('DOMContentLoaded', () => {

  // ========================== 1. THE ULTIMATE, COMPREHENSIVE DATASET (150+ Tools) ==========================
  const toolsData = [
    // Development Environment
    { category: "Development Environment", name: "VirtualBox", description: "A powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use.", icon: "virtualbox", link: "https://www.virtualbox.org/", tags: ["oss"], stacks: ["core"], useCase: "Running different operating systems on a single machine for testing.", learningCurve: "Beginner Friendly" },
    { category: "Development Environment", name: "QEMU", description: "A generic and open source machine emulator and virtualizer.", icon: "qemu", link: "https://www.qemu.org/", tags: ["oss"], stacks: ["core"], useCase: "Hardware emulation for running OSes for different machine architectures.", learningCurve: "Steep" },
    { category: "Development Environment", name: "Vagrant", description: "A tool for building and managing virtual machine environments in a single workflow.", icon: "vagrant", link: "https://www.vagrantup.com/", tags: ["oss"], stacks: ["core"], useCase: "Creating reproducible development environments with code.", learningCurve: "Intermediate" },
    { category: "Development Environment", name: "Docker Desktop", description: "An application for macOS and Windows for building and sharing containerized applications.", icon: "docker-icon", link: "https://www.docker.com/products/docker-desktop", tags: ["paid", "most"], stacks: ["core"], useCase: "The easiest way to start using Docker containers on your local machine.", learningCurve: "Beginner Friendly" },
    { category: "Development Environment", name: "Minikube", description: "A tool that makes it easy to run a single-node Kubernetes cluster locally.", icon: "kubernetes", link: "https://minikube.sigs.k8s.io/", tags: ["oss"], stacks: ["core"], useCase: "For developers learning Kubernetes or developing applications for it locally.", learningCurve: "Beginner Friendly" },
    { category: "Development Environment", name: "Rancher Desktop", description: "An open-source app for desktop Kubernetes and container management on Mac, Windows and Linux.", icon: "rancher", link: "https://rancherdesktop.io/", tags: ["oss"], stacks: ["core"], useCase: "An alternative to Docker Desktop with built-in Kubernetes support.", learningCurve: "Beginner Friendly" },
    { category: "Development Environment", name: "kind", description: "A tool for running local Kubernetes clusters using Docker containers as 'nodes'.", icon: "kubernetes", link: "https://kind.sigs.k8s.io/", tags: ["oss"], stacks: ["core"], useCase: "Quickly creating throwaway Kubernetes clusters for testing CI/CD pipelines.", learningCurve: "Intermediate" },
    { category: "Development Environment", name: "k3d", description: "A lightweight wrapper to run k3s (a minimal Kubernetes distribution) in Docker.", icon: "k3s", link: "https://k3d.io/", tags: ["oss"], stacks: ["core"], useCase: "Spinning up lightweight, fast local Kubernetes clusters for development.", learningCurve: "Intermediate" },

    // IDEs
    { category: "IDEs", name: "Visual Studio Code", description: "A free, lightweight yet powerful source-code editor from Microsoft with a rich ecosystem of extensions.", icon: "visual-studio-code", link: "https://code.visualstudio.com/", tags: ["oss", "most"], stacks: ["core"], useCase: "The de-facto standard editor for DevOps, scripting, and web development.", learningCurve: "Beginner Friendly" },
    { category: "IDEs", name: "Sublime Text", description: "A sophisticated text editor for code, markup, and prose, known for its speed and performance.", icon: "sublime-text", link: "https://www.sublimetext.com/", tags: ["paid"], stacks: ["core"], useCase: "For developers who prioritize speed, performance, and a minimalist UI.", learningCurve: "Beginner Friendly" },
    { category: "IDEs", name: "Notepad++", description: "A free source code editor and Notepad replacement that supports several languages on Windows.", icon: "notepad-plus-plus", link: "https://notepad-plus-plus.org/", tags: ["oss"], stacks: ["core"], useCase: "A lightweight and fast editor for quick edits on Windows systems.", learningCurve: "Beginner Friendly" },
    
    // Planning & Project Management
    { category: "Planning & Project Management", name: "Jira", description: "The #1 tool for agile teams to plan, track, and release software.", icon: "jira", link: "https://www.atlassian.com/software/jira", tags: ["paid", "most"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "Best for established teams needing powerful, customizable workflows.", learningCurve: "Intermediate" },
    { category: "Planning & Project Management", name: "Trello", description: "A simple, visual Kanban board for organizing any project.", icon: "trello", link: "https://trello.com", tags: ["common", "paid"], stacks: ["core"], useCase: "Perfect for small teams, personal projects, and simple workflow visualization.", learningCurve: "Beginner Friendly" },
    { category: "Planning & Project Management", name: "Asana", description: "A web and mobile application designed to help teams organize, track, and manage their work.", icon: "asana", link: "https://asana.com", tags: ["paid", "common"], stacks: ["core"], useCase: "Great for project management with a focus on tasks, deadlines, and team collaboration.", learningCurve: "Beginner Friendly" },
    { category: "Planning & Project Management", name: "Monday.com", description: "A flexible work management tool providing customizable dashboards for task tracking.", icon: "monday", link: "https://monday.com/", tags: ["paid"], stacks: ["core"], useCase: "For teams that need highly visual and customizable project boards.", learningCurve: "Beginner Friendly" },
    { category: "Planning & Project Management", name: "ClickUp", description: "A cloud-based productivity platform that supports document management and task organization.", icon: "clickup", link: "https://clickup.com/", tags: ["paid", "common"], stacks: ["core"], useCase: "An all-in-one suite for teams wanting tasks, docs, and goals in one place.", learningCurve: "Intermediate" },

    // Collaboration & Documentation
    { category: "Collaboration & Documentation", name: "Slack", description: "The primary communication hub for teams, with powerful ChatOps integrations.", icon: "slack-icon", link: "https://slack.com", tags: ["paid", "most"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "Essential for real-time team communication and integrating notifications.", learningCurve: "Beginner Friendly" },
    { category: "Collaboration & Documentation", name: "Confluence", description: "A team workspace for knowledge management, documentation, and project collaboration.", icon: "confluence", link: "https://www.atlassian.com/software/confluence", tags: ["paid", "common"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The go-to tool for creating a centralized knowledge base and technical docs.", learningCurve: "Intermediate" },
    { category: "Collaboration & Documentation", name: "Notion", description: "A highly flexible all-in-one workspace for notes, docs, wikis, and project management.", icon: "notion", link: "https://www.notion.so/", tags: ["paid", "common"], stacks: ["core"], useCase: "For creating highly customized and interconnected documentation and team wikis.", learningCurve: "Beginner Friendly" },
    
    // Source Code Management
    { category: "Source Code Management", name: "Git", description: "The foundational distributed version control system for tracking changes in source code.", icon: "git-icon", link: "https://git-scm.com/", tags: ["oss", "most"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The non-negotiable foundation for all modern version control.", learningCurve: "Intermediate" },
    { category: "Source Code Management", name: "GitHub", description: "The world's leading platform for hosting Git repositories and collaborating on code.", icon: "github-icon", link: "https://github.com", tags: ["most", "paid"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The default choice for open-source and a massive ecosystem of integrations.", learningCurve: "Beginner Friendly" },
    { category: "Source Code Management", name: "GitLab", description: "A complete DevOps platform in a single application, from SCM to CI/CD and monitoring.", icon: "gitlab", link: "https://about.gitlab.com/", tags: ["common", "oss", "paid"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "Best for teams wanting a single, unified platform for the entire DevOps lifecycle.", learningCurve: "Intermediate" },
    { category: "Source Code Management", name: "BitBucket", description: "Code hosting from Atlassian with strong native integration with Jira.", icon: "bitbucket", link: "https://bitbucket.org/", tags: ["paid", "common"], stacks: ["core", "aws", "azure", "gcp"], useCase: "A strong choice for teams heavily invested in the Atlassian (Jira, Confluence) suite.", learningCurve: "Beginner Friendly" },
    { category: "Source Code Management", name: "Gitea", description: "A lightweight and self-hostable Git service written in Go.", icon: "gitea", link: "https://gitea.io/", tags: ["oss"], stacks: ["core"], useCase: "For individuals or teams who want a simple, fast, self-hosted GitHub alternative.", learningCurve: "Beginner Friendly" },
    { category: "Source Code Management", name: "AWS CodeCommit", description: "A secure, highly scalable, managed source control service that hosts private Git repositories.", icon: "aws-codecommit", link: "https://aws.amazon.com/codecommit/", tags: ["paid"], stacks: ["aws"], useCase: "For teams who need a private, secure, and managed Git host within the AWS ecosystem.", learningCurve: "Intermediate" },
    { category: "Source Code Management", name: "Azure Repos", description: "Cloud-hosted private Git repositories for your project within the Azure DevOps suite.", icon: "azure-repos", link: "https://azure.microsoft.com/en-us/products/devops/repos", tags: ["paid"], stacks: ["azure"], useCase: "The native Git provider for teams building on and deploying to Microsoft Azure.", learningCurve: "Intermediate" },
    { category: "Source Code Management", name: "Google Cloud Source Repositories", description: "Fully-featured, private Git repositories hosted on Google Cloud.", icon: "google-cloud", link: "https://cloud.google.com/source-repositories", tags: ["paid"], stacks: ["gcp"], useCase: "A simple and integrated SCM for projects based entirely on Google Cloud Platform.", learningCurve: "Intermediate" },

    // Build Tools
    { category: "Build Tools", name: "Maven", description: "A software project management and comprehension tool, primarily used for Java projects.", icon: "maven", link: "https://maven.apache.org/", tags: ["oss", "common"], stacks: ["core"], useCase: "Building and managing dependencies for Java-based applications.", learningCurve: "Intermediate" },
    { category: "Build Tools", name: "Gradle", description: "An open-source build automation system that builds upon the concepts of Apache Ant and Maven.", icon: "gradle", link: "https://gradle.org/", tags: ["oss", "common"], stacks: ["core"], useCase: "High-performance builds for large, multi-language projects, popular with Android.", learningCurve: "Intermediate" },
    { category: "Build Tools", name: "npm", description: "A package manager for JavaScript, used to install, share, and distribute code.", icon: "npm", link: "https://www.npmjs.com/", tags: ["oss", "most"], stacks: ["core"], useCase: "The default package manager for the Node.js and frontend JavaScript ecosystem.", learningCurve: "Beginner Friendly" },
    { category: "Build Tools", name: "Yarn", description: "A fast, reliable, and secure dependency manager for JavaScript and TypeScript.", icon: "yarn", link: "https://yarnpkg.com/", tags: ["oss", "common"], stacks: ["core"], useCase: "An alternative to npm focused on performance and deterministic installs.", learningCurve: "Beginner Friendly" },
    { category: "Build Tools", name: "MSBuild", description: "The build platform for .NET and Visual Studio.", icon: "visual-studio", link: "https://github.com/dotnet/msbuild", tags: ["oss"], stacks: ["core", "azure"], useCase: "The official build system for projects within the Microsoft .NET ecosystem.", learningCurve: "Intermediate" },

    // CI/CD & Automation
    { category: "CI/CD & Automation", name: "Jenkins", description: "The original open-source automation server for building, testing, and deploying anything.", icon: "jenkins", link: "https://www.jenkins.io/", tags: ["oss", "most"], stacks: ["core", "aws", "azure", "gcp"], useCase: "For teams needing ultimate flexibility and control, with a vast plugin ecosystem.", learningCurve: "Steep" },
    { category: "CI/CD & Automation", name: "GitHub Actions", description: "Automate your workflows from idea to production directly within GitHub.", icon: "github-actions", link: "https://github.com/features/actions", tags: ["common", "paid"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The most convenient CI/CD for projects hosted on GitHub, with a huge community marketplace.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "GitLab CI/CD", description: "Integrated CI/CD pipelines as part of the GitLab DevSecOps platform.", icon: "gitlab", link: "https://docs.gitlab.com/ee/ci/", tags: ["common", "oss", "paid"], stacks: ["core", "aws", "azure", "gcp"], useCase: "The all-in-one choice for teams using GitLab SCM, providing a seamless workflow.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "CircleCI", description: "A fast and scalable CI/CD platform that helps teams build and release quality code, fast.", icon: "circleci", link: "https://circleci.com/", tags: ["paid", "common"], stacks: ["core", "aws", "azure", "gcp"], useCase: "Excellent for performance-focused teams who need fast feedback loops and parallel job execution.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "Travis CI", description: "A cloud-based continuous integration service that automatically builds and tests code changes.", icon: "travis-ci", link: "https://travis-ci.org/", tags: ["paid", "common"], stacks: ["core"], useCase: "One of the original hosted CI services, known for its simplicity with open-source projects.", learningCurve: "Beginner Friendly" },
    { category: "CI/CD & Automation", name: "TeamCity", description: "A powerful build management and continuous integration server from JetBrains.", icon: "teamcity", link: "https://www.jetbrains.com/teamcity/", tags: ["paid", "common"], stacks: ["core"], useCase: "For teams that need powerful build chains and integrations with other JetBrains tools.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "AWS CodePipeline", description: "A fully managed continuous delivery service that helps you automate your release pipelines.", icon: "aws-codepipeline", link: "https://aws.amazon.com/codepipeline/", tags: ["paid"], stacks: ["aws"], useCase: "Orchestrating the build and deployment process entirely within AWS.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "Azure Pipelines", description: "Build, test, and deploy with CI/CD that works with any language, platform, and cloud.", icon: "azure-pipelines", link: "https://azure.microsoft.com/en-us/products/devops/pipelines", tags: ["paid"], stacks: ["azure"], useCase: "A powerful and flexible CI/CD solution, especially for Windows builds and Azure deployments.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "Google Cloud Build", description: "A service that executes your builds on Google Cloud infrastructure.", icon: "google-cloud-build", link: "https://cloud.google.com/build", tags: ["paid"], stacks: ["gcp"], useCase: "A fast, serverless CI/CD service for building and containerizing applications on GCP.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "Argo CD", description: "A declarative, GitOps continuous delivery tool for Kubernetes.", icon: "argo", link: "https://argoproj.github.io/cd/", tags: ["oss", "emerging"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The leading tool for implementing GitOps, ensuring your cluster state matches your Git repo.", learningCurve: "Intermediate" },
    { category: "CI/CD & Automation", name: "Flux", description: "A set of continuous and progressive delivery solutions for Kubernetes that are open and extensible.", icon: "flux", link: "https://fluxcd.io/", tags: ["oss", "emerging"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "A CNCF-graduated project for GitOps that is modular and highly extensible.", learningCurve: "Steep" },
    { category: "CI/CD & Automation", name: "Tekton", description: "A powerful and flexible open-source framework for creating CI/CD systems on Kubernetes.", icon: "tekton", link: "https://tekton.dev/", tags: ["oss", "emerging"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "Building standardized, vendor-neutral, and decoupled CI/CD pipelines on Kubernetes.", learningCurve: "Steep" },
    
    // Artifact Management
    { category: "Artifact Management", name: "JFrog Artifactory", description: "An enterprise-grade universal binary repository manager for all major package formats.", icon: "jfrog", link: "https://jfrog.com/artifactory/", tags: ["paid", "most"], stacks: ["core", "aws", "azure", "gcp"], useCase: "A centralized, single source of truth for all build artifacts and packages in an organization.", learningCurve: "Intermediate" },
    { category: "Artifact Management", name: "Sonatype Nexus", description: "A repository manager that allows you to proxy, collect, and manage your dependencies.", icon: "sonatype", link: "https://www.sonatype.com/nexus/repository-oss", tags: ["oss", "paid"], stacks: ["core", "aws", "azure", "gcp"], useCase: "Storing and proxying build artifacts, especially popular in the Java ecosystem.", learningCurve: "Intermediate" },
    { category: "Artifact Management", name: "AWS ECR", description: "Amazon Elastic Container Registry is a fully-managed Docker container registry.", icon: "aws-ecr", link: "https://aws.amazon.com/ecr/", tags: ["paid"], stacks: ["aws"], useCase: "The native solution for storing and managing Docker images within AWS.", learningCurve: "Beginner Friendly" },
    { category: "Artifact Management", name: "Azure ACR", description: "Azure Container Registry allows you to build, store, and manage container images and artifacts.", icon: "azure-container-registry", link: "https://azure.microsoft.com/en-us/products/container-registry/", tags: ["paid"], stacks: ["azure"], useCase: "The native solution for storing and managing Docker images within Azure.", learningCurve: "Beginner Friendly" },
    { category: "Artifact Management", name: "Google Artifact Registry", description: "A single place for your organization to manage container images and language packages.", icon: "google-cloud", link: "https://cloud.google.com/artifact-registry", tags: ["paid"], stacks: ["gcp"], useCase: "The native solution for storing packages and container images within GCP.", learningCurve: "Beginner Friendly" },

    // Code Quality & Security
    { category: "Code Quality & Security", name: "SonarQube", description: "A leading tool for continuous inspection of code quality and static code analysis (SAST).", icon: "sonarqube", link: "https://www.sonarsource.com/products/sonarqube/", tags: ["oss", "paid", "most"], stacks: ["core", "aws", "azure", "gcp"], useCase: "For enforcing code quality and security standards through static analysis.", learningCurve: "Intermediate" },
    { category: "Code Quality & Security", name: "Snyk", description: "A developer security platform for finding and fixing vulnerabilities in code, dependencies, and containers.", icon: "snyk", link: "https://snyk.io/", tags: ["paid", "emerging"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "Excellent for shifting security left by integrating scans directly into the development workflow.", learningCurve: "Intermediate" },
    { category: "Code Quality & Security", name: "Trivy", description: "A simple and comprehensive vulnerability scanner for containers and other artifacts.", icon: "trivy", link: "https://github.com/aquasecurity/trivy", tags: ["oss", "emerging"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "A fast and easy-to-use vulnerability scanner that integrates well into CI pipelines.", learningCurve: "Beginner Friendly" },
    { category: "Code Quality & Security", name: "Checkmarx", description: "A leading solution in software security for identifying and fixing security flaws in source code.", icon: "checkmarx", link: "https://www.checkmarx.com/", tags: ["paid", "common"], stacks: ["core"], useCase: "Enterprise-grade static (SAST) and interactive (IAST) application security testing.", learningCurve: "Intermediate" },

    // Infrastructure as Code (IaC)
    { category: "Infrastructure as Code (IaC)", name: "Terraform", description: "The industry standard for building, changing, and versioning infrastructure safely and efficiently.", icon: "terraform-icon", link: "https://www.terraform.io/", tags: ["oss", "most"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The go-to choice for managing multi-cloud or hybrid-cloud infrastructure with code.", learningCurve: "Intermediate" },
    { category: "Infrastructure as Code (IaC)", name: "OpenTofu", description: "An open source alternative to Terraform, forked from Terraform and managed by the Linux Foundation.", icon: "opentofu", link: "https://opentofu.org/", tags: ["oss", "emerging"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "A drop-in replacement for Terraform for those preferring a fully open-source tool.", learningCurve: "Intermediate" },
    { category: "Infrastructure as Code (IaC)", name: "Pulumi", description: "A modern IaC platform that allows you to use familiar programming languages to provision cloud infrastructure.", icon: "pulumi", link: "https://www.pulumi.com/", tags: ["oss", "emerging"], stacks: ["core", "aws", "azure", "gcp"], useCase: "For developers who want to manage infrastructure using TypeScript, Python, Go, etc.", learningCurve: "Intermediate" },
    { category: "Infrastructure as Code (IaC)", name: "AWS CloudFormation", description: "Model and provision all your cloud infrastructure resources with a text file or programming language.", icon: "aws-cloudformation", link: "https://aws.amazon.com/cloudformation/", tags: ["paid", "most"], stacks: ["aws"], useCase: "The native IaC service for managing infrastructure exclusively on AWS.", learningCurve: "Steep" },
    { category: "Infrastructure as Code (IaC)", name: "AWS CDK", description: "Define cloud application resources using familiar programming languages.", icon: "aws-cdk", link: "https://aws.amazon.com/cdk/", tags: ["oss"], stacks: ["aws"], useCase: "A developer-centric way to define AWS infrastructure using languages like TypeScript.", learningCurve: "Intermediate" },
    { category: "Infrastructure as Code (IaC)", name: "Azure Bicep", description: "A domain-specific language (DSL) that uses declarative syntax to deploy Azure resources.", icon: "bicep", link: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview", tags: ["oss"], stacks: ["azure"], useCase: "A simpler, more readable way to write IaC for the Microsoft Azure platform.", learningCurve: "Beginner Friendly" },
    { category: "Infrastructure as Code (IaC)", name: "Azure Resource Manager (ARM)", description: "The native deployment and management service for Azure, using JSON templates.", icon: "azure", link: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview", tags: ["paid"], stacks: ["azure"], useCase: "The foundational IaC service for Azure, upon which Bicep is built.", learningCurve: "Steep" },

    // Configuration Management
    { category: "Configuration Management", name: "Ansible", description: "An open-source automation tool for configuration management, app deployment, and task automation.", icon: "ansible", link: "https://www.ansible.com/", tags: ["oss", "most"], stacks: ["core", "aws", "azure", "gcp"], useCase: "Excellent for its simplicity and agentless architecture, great for server configuration.", learningCurve: "Intermediate" },
    { category: "Configuration Management", name: "Puppet", description: "An enterprise-grade configuration management tool to automate infrastructure delivery and operation.", icon: "puppet", link: "https://www.puppet.com/", tags: ["paid", "common"], stacks: ["core", "aws", "azure", "gcp"], useCase: "A model-driven tool for managing large, complex server fleets with a declarative approach.", learningCurve: "Steep" },
    { category: "Configuration Management", name: "Chef", description: "An automation platform that transforms infrastructure into code for speed and consistency.", icon: "chef", link: "https://www.chef.io/", tags: ["paid", "common"], stacks: ["core", "aws", "azure", "gcp"], useCase: "A flexible, code-based approach to configuration management, often used in large enterprises.", learningCurve: "Steep" },
    { category: "Configuration Management", name: "SaltStack", description: "Intelligent IT automation for configuration management and remote execution.", icon: "saltstack", link: "https://www.salt.com/", tags: ["oss", "common"], stacks: ["core", "aws", "azure", "gcp"], useCase: "Known for its high-speed data collection and execution capabilities.", learningCurve: "Steep" },

    // Containerization & Orchestration
    { category: "Containerization & Orchestration", name: "Docker", description: "The de-facto standard platform for developing, shipping, and running applications in containers.", icon: "docker-icon", link: "https://www.docker.com/", tags: ["most", "paid"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The fundamental tool for packaging applications and their dependencies into portable units.", learningCurve: "Beginner Friendly" },
    { category: "Containerization & Orchestration", name: "Podman", description: "A daemonless container engine for developing, managing, and running OCI Containers.", icon: "podman", link: "https://podman.io/", tags: ["oss"], stacks: ["core"], useCase: "A security-focused, daemonless alternative to the Docker engine.", learningCurve: "Intermediate" },
    { category: "Containerization & Orchestration", name: "Kubernetes (K8s)", description: "The leading open-source system for automating deployment, scaling, and management of containerized applications.", icon: "kubernetes", link: "https://kubernetes.io/", tags: ["oss", "most"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "The industry standard for running containerized applications at scale.", learningCurve: "Steep" },
    { category: "Containerization & Orchestration", name: "Helm", description: "The package manager for Kubernetes, helping you define, install, and upgrade complex Kubernetes applications.", icon: "helm", link: "https://helm.sh/", tags: ["oss", "common"], stacks: ["core", "aws", "azure", "gcp", "cloudops"], useCase: "Essential for managing the complexity of deploying applications on Kubernetes.", learningCurve: "Intermediate" },
    { category: "Containerization & Orchestration", name: "Amazon EKS", description: "A managed container service to run and scale Kubernetes on AWS.", icon: "aws-eks", link: "https://aws.amazon.com/eks/", tags: ["paid", "most"], stacks: ["aws"], useCase: "The best way to run a production-grade, managed Kubernetes control plane on AWS.", learningCurve: "Intermediate" },
    { category: "Containerization & Orchestration", name: "Amazon ECS", description: "A fully managed container orchestration service that simplifies your containerized applications.", icon: "aws-ecs", link: "https://aws.amazon.com/ecs/", tags: ["paid", "common"], stacks: ["aws"], useCase: "A simpler, AWS-native alternative to Kubernetes for running containers.", learningCurve: "Beginner Friendly" },
    { category: "Containerization & Orchestration", name: "Azure Kubernetes Service (AKS)", description: "A highly available, secure, and fully managed Kubernetes service.", icon: "azure", link: "https://azure.microsoft.com/en-us/products/kubernetes-service", tags: ["paid", "most"], stacks: ["azure"], useCase: "The premier managed Kubernetes offering for teams deploying on Microsoft Azure.", learningCurve: "Intermediate" },
    { category: "Containerization & Orchestration", name: "Google Kubernetes Engine (GKE)", description: "A secure and managed Kubernetes service with four-way auto scaling and multi-cluster support.", icon: "google-kubernetes-engine", link: "https://cloud.google.com/kubernetes-engine", tags: ["paid", "most"], stacks: ["gcp"], useCase: "A highly automated and opinionated managed Kubernetes service, pioneered by Google.", learningCurve: "Intermediate" },
    { category: "Containerization & Orchestration", name: "Red Hat OpenShift", description: "An enterprise Kubernetes platform for building and scaling containerized applications.", icon: "redhat-openshift", link: "https://www.redhat.com/en/technologies/cloud-computing/openshift", tags: ["paid", "common"], stacks: ["core", "aws", "azure", "gcp"], useCase: "A comprehensive platform for enterprises that need enhanced security and developer tooling on top of Kubernetes.", learningCurve: "Steep" },
    { category: "Containerization & Orchestration", name: "Nomad", description: "A lightweight and flexible orchestrator to deploy and manage containers and non-containerized applications.", icon: "nomad", link: "https://www.nomadproject.io/", tags: ["oss"], stacks: ["core"], useCase: "A simpler alternative to Kubernetes that can also orchestrate VMs and standalone apps.", learningCurve: "Intermediate" },
    
    // Observability, Monitoring & Logging
    { category: "Observability, Monitoring & Logging", name: "Prometheus", description: "An open-source systems monitoring and alerting toolkit originally built at SoundCloud.", icon: "prometheus", link: "https://prometheus.io/", tags: ["oss", "most"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "The de-facto standard for metrics-based monitoring, especially in Kubernetes environments.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Grafana", description: "The open observability platform for visualizing and analyzing metrics, logs, and traces.", icon: "grafana", link: "https://grafana.com/", tags: ["oss", "most"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "The leading tool for creating beautiful, insightful dashboards from any data source.", learningCurve: "Beginner Friendly" },
    { category: "Observability, Monitoring & Logging", name: "Datadog", description: "A unified monitoring and security platform for cloud applications.", icon: "datadog", link: "https://www.datadoghq.com/", tags: ["paid", "common"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "A powerful, all-in-one SaaS platform for teams who want a managed, integrated solution.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Splunk", description: "A data platform for searching, monitoring, and analyzing machine-generated data.", icon: "splunk", link: "https://www.splunk.com/", tags: ["paid", "common"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "An enterprise-grade tool focused on security (SIEM) and powerful log analytics.", learningCurve: "Steep" },
    { category: "Observability, Monitoring & Logging", name: "Elastic Stack (ELK)", description: "A powerful combination of Elasticsearch, Logstash, and Kibana for log management and analysis.", icon: "elastic-stack", link: "https://www.elastic.co/elastic-stack/", tags: ["oss", "common"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "A popular open-source solution for centralized logging and log analysis.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Grafana Loki", description: "A horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus.", icon: "grafana", link: "https://grafana.com/oss/loki/", tags: ["oss", "emerging"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "A cost-effective, easy-to-operate log aggregation system for teams already using Prometheus.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Fluentd", description: "An open source data collector for a unified logging layer.", icon: "fluentd", link: "https://www.fluentd.org/", tags: ["oss", "common"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "The 'plumbing' of log collection, capable of routing logs from any source to any destination.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Amazon CloudWatch", description: "An observability service for monitoring resources and applications on AWS and on-premises.", icon: "aws-cloudwatch", link: "https://aws.amazon.com/cloudwatch/", tags: ["paid", "most"], stacks: ["aws", "cloudops"], useCase: "The native, default choice for monitoring anything and everything within AWS.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Azure Monitor", description: "Collect, analyze, and act on telemetry data from your Azure and on-premises environments.", icon: "azure-monitor", link: "https://azure.microsoft.com/en-us/products/monitor", tags: ["paid", "most"], stacks: ["azure", "cloudops"], useCase: "The comprehensive, built-in solution for monitoring applications and infrastructure on Azure.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Google Cloud Operations (Stackdriver)", description: "A suite of tools for monitoring, logging, and diagnostics for applications on Google Cloud.", icon: "google-cloud", link: "https://cloud.google.com/products/operations", tags: ["paid", "most"], stacks: ["gcp", "cloudops"], useCase: "The integrated monitoring and logging suite for applications running on GCP.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "New Relic", description: "A performance monitoring and observability platform providing real-time insights.", icon: "new-relic", link: "https://newrelic.com/", tags: ["paid", "common"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "A leading APM (Application Performance Monitoring) tool for deep application-level insights.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "Dynatrace", description: "An AI-powered, full-stack, automated performance management solution.", icon: "dynatrace", link: "https://www.dynatrace.com/", tags: ["paid", "common"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "For enterprises needing automated root-cause analysis and advanced observability features.", learningCurve: "Intermediate" },
    { category: "Observability, Monitoring & Logging", name: "PagerDuty", description: "An incident response platform that helps teams manage critical work and keep digital services online.", icon: "pagerduty-icon", link: "https://www.pagerduty.com/", tags: ["paid", "most"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "The market leader for on-call scheduling, alerting, and incident management.", learningCurve: "Beginner Friendly" },
    
    // Security & Secret Management
    { category: "Security & Secret Management", name: "Vault by HashiCorp", description: "Secure, store, and tightly control access to tokens, passwords, certificates, and other secrets.", icon: "vault-icon", link: "https://www.vaultproject.io/", tags: ["oss", "most"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "A centralized secret management solution for any environment, especially multi-cloud.", learningCurve: "Steep" },
    { category: "Security & Secret Management", name: "AWS Secrets Manager", description: "Manage the lifecycle of secrets and sensitive information centrally in AWS.", icon: "aws-secrets-manager", link: "https://aws.amazon.com/secrets-manager/", tags: ["paid"], stacks: ["aws", "cloudops"], useCase: "The native, managed solution for handling secrets within the AWS ecosystem.", learningCurve: "Beginner Friendly" },
    { category: "Security & Secret Management", name: "Azure Key Vault", description: "A cloud service provided by Microsoft to securely manage keys, secrets, and certificates.", icon: "azure-key-vault", link: "https://azure.microsoft.com/en-us/products/key-vault/", tags: ["paid"], stacks: ["azure", "cloudops"], useCase: "The integrated solution for secret and key management for applications on Azure.", learningCurve: "Beginner Friendly" },
    { category: "Security & Secret Management", name: "Google Cloud Secret Manager", description: "A fully managed service on Google Cloud Platform to handle sensitive data like API keys and passwords.", icon: "google-cloud", link: "https://cloud.google.com/secret-manager", tags: ["paid"], stacks: ["gcp", "cloudops"], useCase: "The secure, managed way to store and access secrets for GCP services.", learningCurve: "Beginner Friendly" },
    { category: "Security & Secret Management", name: "Falco", description: "A cloud-native runtime security project, the de facto Kubernetes threat detection engine.", icon: "falco", link: "https://falco.org/", tags: ["oss", "emerging"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "The standard for detecting unexpected application behavior and threats at runtime in Kubernetes.", learningCurve: "Steep" },
    { category: "Security & Secret Management", name: "Kyverno", description: "A policy engine designed for Kubernetes. It can validate, mutate, and generate configurations.", icon: "kyverno", link: "https://kyverno.io/", tags: ["oss", "emerging"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "For enforcing security policies and best practices as code within a Kubernetes cluster.", learningCurve: "Intermediate" },
    { category: "Security & Secret Management", name: "Open Policy Agent (OPA)", description: "A general-purpose policy engine that enables fine-grained, context-aware authorization.", icon: "open-policy-agent", link: "https://www.openpolicyagent.org/", tags: ["oss", "common"], stacks: ["cloudops", "core"], useCase: "A unified tool for enforcing policies across microservices, Kubernetes, and CI/CD pipelines.", learningCurve: "Steep" },
    
    // Service Mesh
    { category: "Service Mesh", name: "Istio", description: "An open platform to connect, manage, and secure microservices.", icon: "istio", link: "https://istio.io/", tags: ["oss", "common"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "A feature-rich service mesh for complex microservice environments needing traffic management and security.", learningCurve: "Steep" },
    { category: "Service Mesh", name: "Linkerd", description: "A lightweight and performance-focused service mesh for Kubernetes.", icon: "linkerd", link: "https://linkerd.io/", tags: ["oss", "emerging"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "A simpler, 'just-works' service mesh focused on observability, reliability, and security.", learningCurve: "Intermediate" },
    { category: "Service Mesh", name: "Consul by HashiCorp", description: "An open-source service networking solution for service discovery and configuration.", icon: "consul", link: "https://www.consul.io/", tags: ["oss", "common"], stacks: ["cloudops", "aws", "azure", "gcp", "core"], useCase: "A great fit for service discovery and networking across multi-cloud and hybrid environments.", learningCurve: "Intermediate" },
    { category: "Service Mesh", name: "Cilium", description: "eBPF-based Networking, Security, and Observability for cloud-native workloads.", icon: "cilium", link: "https://cilium.io/", tags: ["oss", "emerging"], stacks: ["cloudops", "core"], useCase: "A high-performance networking and security layer that can also provide service mesh capabilities.", learningCurve: "Steep" },

    // API Tools
    { category: "API Tools", name: "Postman", description: "A collaboration platform for API development, used for designing, testing, and documenting APIs.", icon: "postman", link: "https://www.postman.com/", tags: ["paid", "most"], stacks: ["core"], useCase: "The industry standard for manual and automated API testing and exploration.", learningCurve: "Beginner Friendly" },
    { category: "API Tools", name: "Swagger / OpenAPI", description: "A framework for API specification with tools for auto-generating documentation, code, and tests.", icon: "swagger", link: "https://swagger.io/", tags: ["oss", "most"], stacks: ["core"], useCase: "Defining a contract for your API that both humans and machines can understand.", learningCurve: "Intermediate" },
    { category: "API Tools", name: "Hoppscotch", description: "An open-source API development ecosystem, praised for its speed and design.", icon: "hoppscotch", link: "https://hoppscotch.io/", tags: ["oss"], stacks: ["core"], useCase: "A lightweight, web-based alternative to Postman for API testing.", learningCurve: "Beginner Friendly" },
    
    // Test Automation
    { category: "Test Automation", name: "Selenium", description: "A suite of tools to automate web browsers across different platforms.", icon: "selenium", link: "https://www.selenium.dev/", tags: ["oss", "most"], stacks: ["core"], useCase: "The go-to solution for automated end-to-end testing of web applications.", learningCurve: "Steep" },
    { category: "Test Automation", name: "JMeter", description: "An open-source software to test performance both on static and dynamic resources.", icon: "jmeter", link: "https://jmeter.apache.org/", tags: ["oss", "common"], stacks: ["core"], useCase: "Load testing, performance measurement, and stress testing web applications.", learningCurve: "Intermediate" },
    { category: "Test Automation", name: "Appium", description: "An open-source tool for automating native, mobile web, and hybrid applications.", icon: "appium", link: "http://appium.io/", tags: ["oss", "common"], stacks: ["core"], useCase: "The standard for automating tests on mobile iOS and Android applications.", learningCurve: "Intermediate" },

    // Cloud Cost Management
    { category: "Cloud Cost Management", name: "InfraCost", description: "Shows cloud cost estimates for Terraform, helping developers see the cost implications of their changes.", icon: "infracost", link: "https://www.infracost.io/", tags: ["oss", "emerging"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "Shifting cloud cost visibility left by showing estimates in pull requests.", learningCurve: "Beginner Friendly" },
    { category: "Cloud Cost Management", name: "Kubecost", description: "Provides real-time cost visibility and insights for teams using Kubernetes.", icon: "kubecost", link: "https://www.kubecost.com/", tags: ["oss", "emerging"], stacks: ["cloudops", "aws", "azure", "gcp"], useCase: "Monitoring and optimizing Kubernetes spending by allocating costs to teams and applications.", learningCurve: "Intermediate" },
    
    // Cloud Providers
    { category: "Cloud Providers", name: "Amazon Web Services (AWS)", description: "The world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services.", icon: "aws", link: "https://aws.amazon.com/", tags: ["paid", "most"], stacks: ["aws"], useCase: "The market leader, offering the widest range of services and a massive global footprint.", learningCurve: "Intermediate" },
    { category: "Cloud Providers", name: "Microsoft Azure", description: "A cloud platform with over 200 products and services, strong in enterprise and hybrid cloud.", icon: "azure", link: "https://azure.microsoft.com/", tags: ["paid", "most"], stacks: ["azure"], useCase: "A top choice for enterprises, especially those already using Microsoft products.", learningCurve: "Intermediate" },
    { category: "Cloud Providers", name: "Google Cloud Platform (GCP)", description: "A suite of cloud computing services known for its strength in Kubernetes, data analytics, and machine learning.", icon: "google-cloud", link: "https://cloud.google.com/", tags: ["paid", "most"], stacks: ["gcp"], useCase: "A leader in containerization, big data, and networking.", learningCurve: "Intermediate" },
  ];
  
  // The rest of the JavaScript logic (App State, URL Management, Rendering, Filtering, etc.)
  // remains the same as the previous version. It is designed to work with this expanded dataset.

  // ========================== App State & DOM Elements ==========================
  const mainContent = document.getElementById('content');
  const searchInput = document.getElementById('searchInput');
  const stackFilterControls = document.getElementById('stackFilters');
  const tagFilterControls = document.getElementById('tagFilters');
  const sortControl = document.getElementById('sortControl');
  const noResults = document.getElementById('noResults');
  const themeBtn = document.getElementById('themeBtn');

  const appState = {
    searchQuery: '',
    activeStack: 'all',
    activeTags: new Set(),
    sortBy: 'default'
  };

  // ========================== URL HASH (STATE) MANAGEMENT ==========================
  function parseHash() {
    try {
      const hash = window.location.hash.substring(1);
      if (!hash) return;
      const params = new URLSearchParams(hash);
      appState.searchQuery = params.get('q') || '';
      appState.activeStack = params.get('stack') || 'all';
      appState.activeTags = new Set((params.get('tags') || '').split(',').filter(Boolean));
      appState.sortBy = params.get('sort') || 'default';
    } catch (e) {
      console.error("Failed to parse URL hash:", e);
      window.location.hash = ''; // Clear invalid hash
    }
  }

  function updateHash() {
    const params = new URLSearchParams();
    if (appState.searchQuery) params.set('q', appState.searchQuery);
    if (appState.activeStack !== 'all') params.set('stack', appState.activeStack);
    if (appState.activeTags.size > 0) params.set('tags', [...appState.activeTags].join(','));
    if (appState.sortBy !== 'default') params.set('sort', appState.sortBy);
    
    const newHash = params.toString();
    if (newHash) {
      history.pushState(null, '', '#' + newHash);
    } else {
      history.pushState(null, '', window.location.pathname);
    }
  }

  // ========================== RENDER LOGIC ==========================
  function renderContent() {
    mainContent.innerHTML = '';
    let totalVisibleCards = 0;

    const groupedTools = toolsData.reduce((acc, tool) => {
      (acc[tool.category] = acc[tool.category] || []).push(tool);
      return acc;
    }, {});

    // Ensure categories are sorted alphabetically
    const sortedCategories = Object.keys(groupedTools).sort();

    for (const category of sortedCategories) {
      let sectionTools = groupedTools[category].filter(tool => {
        // --- Smart Stack Filtering Logic ---
        let matchesStack = false;
        const cloudProviders = ['aws', 'azure', 'gcp'];
        if (appState.activeStack === 'all') {
            matchesStack = true;
        } else if (cloudProviders.includes(appState.activeStack)) {
            // If a cloud provider is selected, show its specific tools AND core/cloudops tools
            matchesStack = tool.stacks.includes(appState.activeStack) || tool.stacks.includes('core') || tool.stacks.includes('cloudops');
        } else {
            // Otherwise, just match the selected stack (e.g., 'core' or 'cloudops')
            matchesStack = tool.stacks.includes(appState.activeStack);
        }
        
        const matchesTags = [...appState.activeTags].every(tag => tool.tags.includes(tag));
        const matchesSearch = `${tool.name} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase().includes(appState.searchQuery);
        
        return matchesStack && matchesTags && matchesSearch;
      });
      
      if (sectionTools.length === 0) continue;
      
      // Apply sorting
      if (appState.sortBy === 'az') {
        sectionTools.sort((a, b) => a.name.localeCompare(b.name));
      } else if (appState.sortBy === 'za') {
        sectionTools.sort((a, b) => b.name.localeCompare(a.name));
      }

      totalVisibleCards += sectionTools.length;

      const section = document.createElement('section');
      section.className = 'section';
      
      const title = document.createElement('h2');
      title.textContent = category;
      section.appendChild(title);
      
      const toolsContainer = document.createElement('div');
      toolsContainer.className = 'tools';

      sectionTools.forEach(tool => {
          const card = document.createElement('div');
          card.className = 'tool-card';
          
          const tagsHtml = tool.tags.map(tag => `<span class="tag ${tag}">${tag.replace('-', ' ')}</span>`).join('');
          const iconUrl = `https://cdn.svgporn.com/logos/${tool.icon}.svg`;
          const fallback = tool.name.replace(/ by .*/, '').substring(0, 2).toUpperCase();

          card.innerHTML = `
              <div class="tool-header">
                  <div class="tool-icon">
                      <img src="${iconUrl}" alt="${tool.name} logo" loading="lazy" onerror="this.parentElement.innerHTML = '<div class=\\'tool-fallback\\'>${fallback}</div>'">
                  </div>
                  <div class="tool-content">
                      <h3>${tool.name}</h3>
                      <p class="tool-desc">${tool.description}</p>
                      <div class="tool-actions">
                          <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="visit">
                              Visit Website
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7m0 0H7m10 0v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          </a>
                          ${tagsHtml}
                      </div>
                  </div>
              </div>
              <div class="tool-details">
                  <div class="tool-details-inner">
                      <div class="details-content">
                          <p class="detail-item"><strong>Best For:</strong> ${tool.useCase}</p>
                          <p class="detail-item">
                              <strong>Learning Curve:</strong> 
                              <span class="tag ${tool.learningCurve.toLowerCase().replace(' ', '-')}">${tool.learningCurve}</span>
                          </p>
                      </div>
                  </div>
              </div>
          `;

          // Click listener for expansion
          card.addEventListener('click', (e) => {
              // Don't expand if the 'Visit Website' link was clicked
              if (e.target.closest('.visit')) return;
              card.classList.toggle('is-expanded');
          });

          toolsContainer.appendChild(card);
      });
      
      section.appendChild(toolsContainer);
      mainContent.appendChild(section);
    }
    noResults.style.display = totalVisibleCards === 0 ? 'block' : 'none';
  }

  // ========================== FILTER & UI LOGIC ==========================
  function setupFilters() {
    // Stack Filters (Single Select)
    const stacks = ['all', 'core', 'aws', 'azure', 'gcp', 'cloudops'];
    stacks.forEach(filterValue => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = filterValue;
        btn.dataset.filter = filterValue;
        stackFilterControls.appendChild(btn);
        btn.addEventListener('click', () => {
            appState.activeStack = filterValue;
            updateAndRender();
        });
    });

    // Tag Filters (Multi-Select)
    const tags = ['all', 'oss', 'paid', 'most', 'common', 'emerging'];
    tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = tag;
        btn.dataset.filter = tag;
        tagFilterControls.appendChild(btn);
        btn.addEventListener('click', () => {
            if (tag === 'all') {
                appState.activeTags.clear();
            } else {
                if (appState.activeTags.has(tag)) {
                    appState.activeTags.delete(tag);
                } else {
                    appState.activeTags.add(tag);
                }
            }
            updateAndRender();
        });
    });
  }
  
  function syncUIToState() {
      searchInput.value = appState.searchQuery;
      sortControl.value = appState.sortBy;
      
      // Sync stack filters
      stackFilterControls.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.filter === appState.activeStack);
      });
      
      // Sync tag filters
      tagFilterControls.querySelectorAll('.filter-btn').forEach(b => {
          const filter = b.dataset.filter;
          if (filter === 'all') {
              b.classList.toggle('active', appState.activeTags.size === 0);
          } else {
              b.classList.toggle('active', appState.activeTags.has(filter));
          }
      });
  }

  function updateAndRender() {
      updateHash();
      syncUIToState();
      renderContent();
  }
  
  // ========================== THEME LOGIC ==========================
  function setupTheme() {
    const savedTheme = localStorage.getItem('theme');
    const applyTheme = (theme) => {
        const isLight = theme === 'light';
        document.body.classList.toggle('light', isLight);
        themeBtn.textContent = isLight ? '🌞 Light' : '🌙 Dark';
    };

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        applyTheme(prefersLight ? 'light' : 'dark');
    }

    themeBtn.addEventListener('click', () => {
        const newTheme = document.body.classList.toggle('light') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });
  }

  // ========================== INITIALIZE APP ==========================
  function init() {
    setupTheme();
    setupFilters();
    parseHash();
    syncUIToState();
    renderContent();

    searchInput.addEventListener('input', () => {
        appState.searchQuery = searchInput.value.toLowerCase().trim();
        updateAndRender();
    });
    sortControl.addEventListener('change', () => {
        appState.sortBy = sortControl.value;
        updateAndRender();
    });
    window.addEventListener('hashchange', () => {
        parseHash();
        syncUIToState();
        renderContent();
    });
  }

  init();
});