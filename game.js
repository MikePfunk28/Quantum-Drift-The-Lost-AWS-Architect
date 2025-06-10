// Enhanced Quantum Drift: The Lost AWS Architect
// Main game module with improved functionality

// =============================================
// ENHANCED AWS MOCK SERVICE WITH NEW SERVICES
// =============================================
class EnhancedAWSService {
    constructor() {
        this.resources = {
            ec2: { instances: {} },
            s3: { buckets: {} },
            lambda: { functions: {} },
            cloudformation: { stacks: {} },
            cloudwatch: { alarms: {}, dashboards: {}, logGroups: {}, logStreams: {} },
            sns: { topics: {} },
            sqs: { queues: {} },
            apigateway: { apis: {} },
            cloudtrail: { trails: {} },
            xray: { traces: {} }
        };
        this.currentRegion = 'us-east-1';
    }

    // Enhanced SNS Methods
    createTopic(options = {}) {
        const region = options.region || this.currentRegion;
        const topicName = options.topicName;

        if (!topicName) {
            console.log('> Error: Missing required parameter topicName');
            return { error: 'Missing required parameter' };
        }

        if (!this.resources.sns.topics[region]) {
            this.resources.sns.topics[region] = {};
        }

        if (this.resources.sns.topics[region][topicName]) {
            console.log(`> Error: SNS topic ${topicName} already exists`);
            return { error: 'Topic already exists' };
        }

        const topicArn = `arn:aws:sns:${region}:123456789012:${topicName}`;
        this.resources.sns.topics[region][topicName] = {
            name: topicName,
            creationDate: new Date().toISOString(),
            region: region,
            arn: topicArn,
            subscriptions: []
        };

        console.log(`> Successfully created SNS topic: ${topicName}`);
        console.log(`> Topic ARN: ${topicArn}`);

        return { TopicArn: topicArn };
    }

    listTopics(options = {}) {
        const region = options.region || this.currentRegion;
        
        if (!this.resources.sns.topics[region]) {
            this.resources.sns.topics[region] = {};
        }

        const topics = Object.values(this.resources.sns.topics[region]);
        console.log(`> Listing SNS topics in ${region}:`);

        if (topics.length === 0) {
            console.log('> No SNS topics found.');
            return { Topics: [] };
        }

        topics.forEach(topic => {
            console.log(`> Topic ARN: ${topic.arn}`);
        });

        return { Topics: topics };
    }

    publish(options = {}) {
        const region = options.region || this.currentRegion;
        const topicArn = options.topicArn;
        const message = options.message;

        if (!topicArn || !message) {
            console.log('> Error: Missing required parameters');
            return { error: 'Missing required parameters' };
        }

        const topicName = topicArn.split(':').pop();
        const messageId = this.generateRandomId();

        console.log(`> Successfully published message to topic ${topicName}`);
        console.log(`> Message ID: ${messageId}`);

        return { MessageId: messageId };
    }

    // Enhanced SQS Methods
    createQueue(options = {}) {
        const region = options.region || this.currentRegion;
        const queueName = options.queueName;

        if (!queueName) {
            console.log('> Error: Missing required parameter queueName');
            return { error: 'Missing required parameter' };
        }

        if (!this.resources.sqs.queues[region]) {
            this.resources.sqs.queues[region] = {};
        }

        if (this.resources.sqs.queues[region][queueName]) {
            console.log(`> Error: SQS queue ${queueName} already exists`);
            return { error: 'Queue already exists' };
        }

        const queueUrl = `https://sqs.${region}.amazonaws.com/123456789012/${queueName}`;
        this.resources.sqs.queues[region][queueName] = {
            name: queueName,
            creationDate: new Date().toISOString(),
            region: region,
            url: queueUrl,
            arn: `arn:aws:sqs:${region}:123456789012:${queueName}`,
            messages: []
        };

        console.log(`> Successfully created SQS queue: ${queueName}`);
        console.log(`> Queue URL: ${queueUrl}`);

        return { QueueUrl: queueUrl };
    }

    listQueues(options = {}) {
        const region = options.region || this.currentRegion;
        
        if (!this.resources.sqs.queues[region]) {
            this.resources.sqs.queues[region] = {};
        }

        const queueUrls = Object.values(this.resources.sqs.queues[region]).map(queue => queue.url);
        console.log(`> Listing SQS queues in ${region}:`);

        if (queueUrls.length === 0) {
            console.log('> No SQS queues found.');
            return { QueueUrls: [] };
        }

        queueUrls.forEach(url => {
            console.log(`> ${url}`);
        });

        return { QueueUrls: queueUrls };
    }

    sendMessage(options = {}) {
        const queueUrl = options.queueUrl;
        const messageBody = options.messageBody;

        if (!queueUrl || !messageBody) {
            console.log('> Error: Missing required parameters');
            return { error: 'Missing required parameters' };
        }

        const messageId = this.generateRandomId();
        console.log(`> Successfully sent message to queue`);
        console.log(`> Message ID: ${messageId}`);

        return { MessageId: messageId };
    }

    // Enhanced API Gateway Methods
    createApi(options = {}) {
        const region = options.region || this.currentRegion;
        const apiName = options.apiName;
        const apiType = options.apiType || 'REST';

        if (!apiName) {
            console.log('> Error: Missing required parameter apiName');
            return { error: 'Missing required parameter' };
        }

        if (!this.resources.apigateway.apis[region]) {
            this.resources.apigateway.apis[region] = {};
        }

        if (this.resources.apigateway.apis[region][apiName]) {
            console.log(`> Error: API ${apiName} already exists`);
            return { error: 'API already exists' };
        }

        const apiId = 'api-' + Math.random().toString(36).substring(2, 10);
        this.resources.apigateway.apis[region][apiName] = {
            id: apiId,
            name: apiName,
            type: apiType,
            creationDate: new Date().toISOString(),
            region: region,
            endpointUrl: `https://${apiId}.execute-api.${region}.amazonaws.com`,
            resources: {
                'root': {
                    id: 'resource-root',
                    path: '/',
                    parentId: null,
                    methods: {}
                }
            },
            deployments: []
        };

        console.log(`> Successfully created API Gateway API: ${apiName}`);
        console.log(`> API ID: ${apiId}`);
        console.log(`> Endpoint URL: ${this.resources.apigateway.apis[region][apiName].endpointUrl}`);

        return {
            id: apiId,
            name: apiName,
            endpointConfiguration: { types: [apiType] },
            createdDate: this.resources.apigateway.apis[region][apiName].creationDate
        };
    }

    listApis(options = {}) {
        const region = options.region || this.currentRegion;
        
        if (!this.resources.apigateway.apis[region]) {
            this.resources.apigateway.apis[region] = {};
        }

        const apis = Object.values(this.resources.apigateway.apis[region]);
        console.log(`> Listing API Gateway APIs in ${region}:`);

        if (apis.length === 0) {
            console.log('> No APIs found.');
            return { items: [] };
        }

        apis.forEach(api => {
            console.log(`> API ID: ${api.id}, Name: ${api.name}, Endpoint: ${api.endpointUrl}`);
        });

        return { items: apis };
    }

    // Helper methods
    generateRandomId() {
        return Math.random().toString(36).substring(2, 15);
    }

    generateMD5(text) {
        // Simple hash function for demo purposes
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            const char = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash).toString(16);
    }
}

// =============================================
// ENHANCED AWS CLI COMMAND PROCESSOR
// =============================================
class AWSCLIProcessor {
    constructor(awsService) {
        this.aws = awsService;
    }

    processCommand(command) {
        const parts = command.trim().split(' ');
        
        if (parts[0] !== 'aws') {
            return false;
        }

        if (parts.length < 3) {
            console.log('> AWS CLI command format: aws <service> <command> [options]');
            return false;
        }

        const service = parts[1].toLowerCase();
        const serviceCommand = parts[2].toLowerCase();
        const options = this.parseOptions(parts.slice(3));

        switch (service) {
            case 'sns':
                return this.handleSNSCommand(serviceCommand, options);
            case 'sqs':
                return this.handleSQSCommand(serviceCommand, options);
            case 'apigateway':
                return this.handleAPIGatewayCommand(serviceCommand, options);
            case 'ec2':
                return this.handleEC2Command(serviceCommand, options);
            case 's3':
                return this.handleS3Command(serviceCommand, options);
            case 'lambda':
                return this.handleLambdaCommand(serviceCommand, options);
            default:
                console.log(`> AWS service '${service}' not implemented yet.`);
                return false;
        }
    }

    handleSNSCommand(command, options) {
        switch (command) {
            case 'create-topic':
                const topicName = options['--name'];
                if (!topicName) {
                    console.log('> Error: Missing required parameter --name');
                    return false;
                }
                return this.aws.createTopic({ topicName });

            case 'list-topics':
                return this.aws.listTopics();

            case 'publish':
                const topicArn = options['--topic-arn'];
                const message = options['--message'];
                if (!topicArn || !message) {
                    console.log('> Error: Missing required parameters --topic-arn and --message');
                    return false;
                }
                return this.aws.publish({ topicArn, message });

            default:
                console.log(`> SNS command '${command}' not implemented yet.`);
                return false;
        }
    }

    handleSQSCommand(command, options) {
        switch (command) {
            case 'create-queue':
                const queueName = options['--queue-name'];
                if (!queueName) {
                    console.log('> Error: Missing required parameter --queue-name');
                    return false;
                }
                return this.aws.createQueue({ queueName });

            case 'list-queues':
                return this.aws.listQueues();

            case 'send-message':
                const queueUrl = options['--queue-url'];
                const messageBody = options['--message-body'];
                if (!queueUrl || !messageBody) {
                    console.log('> Error: Missing required parameters --queue-url and --message-body');
                    return false;
                }
                return this.aws.sendMessage({ queueUrl, messageBody });

            default:
                console.log(`> SQS command '${command}' not implemented yet.`);
                return false;
        }
    }

    handleAPIGatewayCommand(command, options) {
        switch (command) {
            case 'create-rest-api':
                const apiName = options['--name'];
                if (!apiName) {
                    console.log('> Error: Missing required parameter --name');
                    return false;
                }
                return this.aws.createApi({ apiName });

            case 'get-rest-apis':
                return this.aws.listApis();

            default:
                console.log(`> API Gateway command '${command}' not implemented yet.`);
                return false;
        }
    }

    handleEC2Command(command, options) {
        switch (command) {
            case 'describe-instances':
                console.log('> Listing EC2 instances...');
                console.log('> No instances found in current region.');
                return true;

            case 'run-instances':
                const imageId = options['--image-id'] || 'ami-12345678';
                const instanceType = options['--instance-type'] || 't2.micro';
                console.log(`> Launching EC2 instance: ${instanceType} with AMI ${imageId}`);
                console.log('> Instance launched successfully.');
                return true;

            default:
                console.log(`> EC2 command '${command}' not implemented yet.`);
                return false;
        }
    }

    handleS3Command(command, options) {
        switch (command) {
            case 'ls':
                console.log('> Listing S3 buckets...');
                console.log('> No buckets found.');
                return true;

            case 'mb':
                const bucketName = options['bucket'] || options['--bucket'];
                if (!bucketName) {
                    console.log('> Error: Missing bucket name');
                    return false;
                }
                console.log(`> Creating S3 bucket: ${bucketName}`);
                console.log('> Bucket created successfully.');
                return true;

            default:
                console.log(`> S3 command '${command}' not implemented yet.`);
                return false;
        }
    }

    handleLambdaCommand(command, options) {
        switch (command) {
            case 'list-functions':
                console.log('> Listing Lambda functions...');
                console.log('> No functions found in current region.');
                return true;

            case 'create-function':
                const functionName = options['--function-name'];
                if (!functionName) {
                    console.log('> Error: Missing required parameter --function-name');
                    return false;
                }
                console.log(`> Creating Lambda function: ${functionName}`);
                console.log('> Function created successfully.');
                return true;

            default:
                console.log(`> Lambda command '${command}' not implemented yet.`);
                return false;
        }
    }

    parseOptions(args) {
        const options = {};
        for (let i = 0; i < args.length; i++) {
            if (args[i].startsWith('--')) {
                const key = args[i];
                const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
                options[key] = value;
                if (value !== true) i++; // Skip the value in next iteration
            } else if (!args[i - 1] || !args[i - 1].startsWith('--')) {
                // Positional argument
                options[args[i]] = true;
            }
        }
        return options;
    }
}

// =============================================
// IMPROVED HACKING MINI-GAME
// =============================================
class ImprovedHackingGame {
    constructor() {
        this.isActive = false;
        this.score = 0;
        this.timeLeft = 45; // Increased from 30 to 45 seconds
        this.targetService = null;
        this.targets = [];
        this.interval = null;
        this.spawnInterval = null;
        this.requiredScore = 10; // Reduced from 15 to 10
        this.difficulty = 1;
    }

    start(serviceName) {
        this.isActive = true;
        this.score = 0;
        this.timeLeft = 45;
        this.targetService = serviceName;
        this.targets = [];
        this.requiredScore = Math.max(8, 10 - this.difficulty); // Adaptive difficulty

        // Update UI
        document.getElementById('hack-progress-bar').style.width = '0%';
        document.getElementById('hack-timer').textContent = `${this.timeLeft}s`;
        document.getElementById('hack-score').textContent = '0';

        // Show instructions
        this.showInstructions();

        // Start timer
        this.interval = setInterval(() => {
            this.timeLeft--;
            document.getElementById('hack-timer').textContent = `${this.timeLeft}s`;
            
            if (this.timeLeft <= 0) {
                this.end(false);
            }
            
            // Visual warning when time is low
            if (this.timeLeft <= 10) {
                document.getElementById('hack-timer').classList.add('animate-pulse');
            }
        }, 1000);

        // Start spawning targets more frequently
        this.spawnTargets();
        this.spawnInterval = setInterval(() => {
            this.spawnTargets();
        }, 2000); // Spawn every 2 seconds instead of 3
    }

    showInstructions() {
        const terminal = document.getElementById('terminal-content');
        terminal.innerHTML = '';
        this.addToTerminal(`> Initiating deployment of ${this.targetService}...`);
        this.addToTerminal(`> Target: Click ${this.targetService} icons to progress`);
        this.addToTerminal(`> Required progress: ${this.requiredScore} successful hits`);
        this.addToTerminal(`> Time limit: ${this.timeLeft} seconds`);
        this.addToTerminal(`> Avoid clicking wrong service icons!`);
    }

    spawnTargets() {
        if (!this.isActive) return;

        const container = document.getElementById('fps-targets');
        const containerRect = container.getBoundingClientRect();
        
        // Clear old targets
        container.innerHTML = '';
        this.targets = [];

        // Spawn 4-6 targets (increased from 3-4)
        const targetCount = 4 + Math.floor(Math.random() * 3);
        
        for (let i = 0; i < targetCount; i++) {
            this.createTarget(container, containerRect);
        }
    }

    createTarget(container, containerRect) {
        const target = document.createElement('div');
        target.className = 'fps-target';
        
        // Random position with better spacing
        const margin = 60;
        const x = margin + Math.random() * (containerRect.width - margin * 2);
        const y = margin + Math.random() * (containerRect.height - margin * 2);
        
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;

        // Service icons with weighted selection
        const services = [
            { name: 'EC2', icon: 'fa-server', color: 'bg-blue-600' },
            { name: 'S3', icon: 'fa-database', color: 'bg-yellow-600' },
            { name: 'Lambda', icon: 'fa-bolt', color: 'bg-green-600' },
            { name: 'RDS', icon: 'fa-table', color: 'bg-red-600' },
            { name: 'CloudFront', icon: 'fa-network-wired', color: 'bg-purple-600' },
            { name: 'DynamoDB', icon: 'fa-list-alt', color: 'bg-pink-600' },
            { name: 'SNS', icon: 'fa-bell', color: 'bg-orange-600' },
            { name: 'SQS', icon: 'fa-inbox', color: 'bg-indigo-600' },
            { name: 'API Gateway', icon: 'fa-gateway', color: 'bg-teal-600' }
        ];

        // Higher chance for correct service (60% vs 40% for others)
        let selectedService;
        if (Math.random() < 0.6) {
            selectedService = services.find(s => s.name === this.targetService) || services[0];
            target.dataset.correct = 'true';
        } else {
            const otherServices = services.filter(s => s.name !== this.targetService);
            selectedService = otherServices[Math.floor(Math.random() * otherServices.length)];
        }

        target.className += ` ${selectedService.color}`;
        target.innerHTML = `<i class="fas ${selectedService.icon} text-white"></i>`;
        
        // Add click handler
        target.addEventListener('click', (e) => this.handleTargetClick(e, target));
        
        container.appendChild(target);
        this.targets.push(target);
    }

    handleTargetClick(event, target) {
        if (!this.isActive) return;

        event.stopPropagation();
        
        // Visual feedback
        target.style.transform = 'scale(1.2)';
        target.style.opacity = '0.5';
        
        setTimeout(() => {
            if (target.parentNode) {
                target.remove();
            }
        }, 200);

        if (target.dataset.correct) {
            // Correct target
            this.score++;
            document.getElementById('hack-score').textContent = this.score;
            
            // Update progress
            const progress = (this.score / this.requiredScore) * 100;
            document.getElementById('hack-progress-bar').style.width = `${Math.min(progress, 100)}%`;
            
            this.addToTerminal(`> ✓ Correct! Progress: ${this.score}/${this.requiredScore}`);
            
            // Check win condition
            if (this.score >= this.requiredScore) {
                this.end(true);
                return;
            }
        } else {
            // Wrong target - less harsh penalty
            this.addToTerminal(`> ✗ Wrong service! Focus on ${this.targetService} icons`);
            // No score penalty, just feedback
        }
    }

    end(success) {
        this.isActive = false;
        
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval);
            this.spawnInterval = null;
        }

        // Clear targets
        document.getElementById('fps-targets').innerHTML = '';
        
        if (success) {
            this.addToTerminal(`> ✓ DEPLOYMENT SUCCESSFUL!`);
            this.addToTerminal(`> ${this.targetService} service is now online`);
            this.difficulty = Math.min(this.difficulty + 0.5, 5); // Increase difficulty gradually
        } else {
            this.addToTerminal(`> ✗ Deployment failed - time expired`);
            this.addToTerminal(`> Try again with better focus`);
        }

        // Notify game of completion
        if (window.gameInstance) {
            window.gameInstance.onHackingComplete(success, this.targetService);
        }
    }

    addToTerminal(text) {
        const terminal = document.getElementById('terminal-content');
        const line = document.createElement('div');
        line.textContent = text;
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
    }
}

// =============================================
// GLOBAL MAP WITH HIGHLIGHTED DESTINATIONS
// =============================================
class GlobalMap {
    constructor() {
        this.regions = {
            'us-east-1': { name: 'N. Virginia', x: 220, y: 150, color: 'blue', visited: false, active: false },
            'us-east-2': { name: 'Ohio', x: 200, y: 160, color: 'blue', visited: false, active: false },
            'us-west-2': { name: 'Oregon', x: 120, y: 150, color: 'blue', visited: false, active: false },
            'eu-west-1': { name: 'Ireland', x: 440, y: 120, color: 'green', visited: false, active: false },
            'eu-central-1': { name: 'Frankfurt', x: 470, y: 150, color: 'green', visited: false, active: false },
            'ap-northeast-1': { name: 'Tokyo', x: 680, y: 180, color: 'red', visited: false, active: false },
            'ap-southeast-1': { name: 'Singapore', x: 650, y: 250, color: 'red', visited: false, active: false },
            'ap-southeast-2': { name: 'Sydney', x: 700, y: 300, color: 'red', visited: false, active: false },
            'sa-east-1': { name: 'São Paulo', x: 270, y: 250, color: 'yellow', visited: false, active: false }
        };
        this.currentRegion = null;
        this.targetRegion = null;
        this.init();
    }

    init() {
        // Add click handlers to region circles
        Object.keys(this.regions).forEach(regionId => {
            const circle = document.querySelector(`circle[data-region="${regionId}"]`);
            if (circle) {
                circle.addEventListener('click', () => this.selectRegion(regionId));
                circle.addEventListener('mouseenter', () => this.showRegionInfo(regionId));
                circle.addEventListener('mouseleave', () => this.hideRegionInfo());
            }
        });

        // Randomly select a target region for the mystery
        const regionIds = Object.keys(this.regions);
        this.targetRegion = regionIds[Math.floor(Math.random() * regionIds.length)];
        console.log(`Debug: Target region is ${this.targetRegion}`);
    }

    selectRegion(regionId) {
        if (this.currentRegion === regionId) return;

        // Update previous region
        if (this.currentRegion) {
            const prevCircle = document.querySelector(`circle[data-region="${this.currentRegion}"]`);
            if (prevCircle) {
                prevCircle.classList.remove('current');
            }
            this.regions[this.currentRegion].active = false;
        }

        // Update new region
        this.currentRegion = regionId;
        this.regions[regionId].visited = true;
        this.regions[regionId].active = true;

        const circle = document.querySelector(`circle[data-region="${regionId}"]`);
        if (circle) {
            circle.classList.add('visited', 'current');
        }

        // Update UI
        const region = this.regions[regionId];
        document.querySelector('#current-location span').textContent = region.name;
        document.getElementById('location-controls').classList.remove('hidden');

        // Highlight target region with special effect
        if (regionId === this.targetRegion) {
            this.highlightTargetRegion();
        }

        // Notify game of region change
        if (window.gameInstance) {
            window.gameInstance.onRegionChanged(regionId);
        }
    }

    highlightTargetRegion() {
        const circle = document.querySelector(`circle[data-region="${this.targetRegion}"]`);
        if (circle) {
            circle.style.filter = 'drop-shadow(0 0 10px #ffd700)';
            circle.style.animation = 'pulse 2s infinite';
        }
    }

    showRegionInfo(regionId) {
        const region = this.regions[regionId];
        const infoElement = document.getElementById('region-info');
        
        document.getElementById('region-name').textContent = region.name;
        document.getElementById('region-description').textContent = 
            `AWS Region: ${regionId} | Status: ${region.visited ? 'Visited' : 'Unexplored'}`;
        
        infoElement.classList.remove('hidden');
    }

    hideRegionInfo() {
        document.getElementById('region-info').classList.add('hidden');
    }

    getTargetRegion() {
        return this.targetRegion;
    }

    isInTargetRegion() {
        return this.currentRegion === this.targetRegion;
    }
}

// =============================================
// AWS QUESTIONS SYSTEM
// =============================================
class AWSQuestionsSystem {
    constructor() {
        this.questions = [];
        this.currentQuestion = null;
        this.loadQuestions();
    }

    async loadQuestions() {
        try {
            const response = await fetch('questions.json');
            this.questions = await response.json();
            console.log(`Loaded ${this.questions.length} AWS questions`);
        } catch (error) {
            console.error('Failed to load questions:', error);
            // Fallback questions
            this.questions = [
                {
                    question: "Which AWS service is best for storing static website content?",
                    options: {
                        "A": "Amazon EC2",
                        "B": "Amazon S3",
                        "C": "Amazon RDS",
                        "D": "Amazon Lambda"
                    },
                    answer: "B",
                    explanation: "Amazon S3 is ideal for hosting static websites with high availability and scalability.",
                    image: "images/services16/Arch_Storage/48/Arch_Amazon-S3_48.png"
                }
            ];
        }
    }

    getRandomQuestion() {
        if (this.questions.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }

    showQuestion(onAnswer) {
        this.currentQuestion = this.getRandomQuestion();
        if (!this.currentQuestion) return false;

        // Show question modal
        const modal = document.getElementById('question-modal');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('question-options');
        const problemDescription = document.getElementById('problem-description');

        // Set question content
        questionText.textContent = this.currentQuestion.question;
        
        // Set problem description if available
        if (this.currentQuestion.problem_description) {
            problemDescription.textContent = this.currentQuestion.problem_description;
            document.getElementById('problem-description-container').style.display = 'block';
        } else {
            document.getElementById('problem-description-container').style.display = 'none';
        }

        // Clear previous options
        optionsContainer.innerHTML = '';

        // Add option buttons
        Object.entries(this.currentQuestion.options).forEach(([key, value]) => {
            const button = document.createElement('button');
            button.className = 'bg-gray-700 hover:bg-gray-600 p-3 rounded text-left w-full';
            button.innerHTML = `<strong>${key}:</strong> ${value}`;
            button.addEventListener('click', () => {
                this.handleAnswer(key, onAnswer);
            });
            optionsContainer.appendChild(button);
        });

        // Show skip button
        const skipBtn = document.getElementById('skip-question-btn');
        skipBtn.onclick = () => {
            this.handleSkip(onAnswer);
        };

        modal.classList.remove('hidden');
        return true;
    }

    handleAnswer(selectedAnswer, callback) {
        const isCorrect = selectedAnswer === this.currentQuestion.answer;
        
        // Show feedback
        const feedback = document.getElementById('answer-feedback');
        const feedbackTitle = feedback.querySelector('h3');
        const feedbackText = feedback.querySelector('.explanation-text');

        if (isCorrect) {
            feedback.className = 'p-4 rounded mb-6 bg-green-800 border border-green-600';
            feedbackTitle.textContent = '✓ Correct!';
            feedbackTitle.className = 'font-bold mb-2 text-green-300';
        } else {
            feedback.className = 'p-4 rounded mb-6 bg-red-800 border border-red-600';
            feedbackTitle.textContent = '✗ Incorrect';
            feedbackTitle.className = 'font-bold mb-2 text-red-300';
        }

        feedbackText.textContent = this.currentQuestion.explanation;
        feedback.classList.remove('hidden');

        // Hide question modal after delay
        setTimeout(() => {
            document.getElementById('question-modal').classList.add('hidden');
            feedback.classList.add('hidden');
            if (callback) callback(isCorrect);
        }, 3000);
    }

    handleSkip(callback) {
        document.getElementById('question-modal').classList.add('hidden');
        if (callback) callback(false, true); // false for incorrect, true for skipped
    }
}

// =============================================
// MAIN GAME CLASS
// =============================================
class QuantumDriftGame {
    constructor() {
        this.awsService = new EnhancedAWSService();
        this.cliProcessor = new AWSCLIProcessor(this.awsService);
        this.hackingGame = new ImprovedHackingGame();
        this.globalMap = new GlobalMap();
        this.questionsSystem = new AWSQuestionsSystem();
        
        this.gameState = {
            player: {
                level: 1,
                xp: 0,
                health: 100,
                maxHealth: 100,
                credits: 500,
                certs: 0,
                deployedServices: [],
                currentRegion: null
            },
            phase: 'start' // start, world, hacking, complete
        };

        this.init();
    }

    init() {
        // Set global reference
        window.gameInstance = this;
        
        // Initialize event listeners
        this.setupEventListeners();
        
        // Initialize UI
        this.updateUI();
        
        console.log('Quantum Drift: Enhanced Edition initialized');
    }

    setupEventListeners() {
        // Console command input
        const consoleInput = document.getElementById('console-input');
        const consoleSubmit = document.getElementById('console-submit');
        
        if (consoleInput) {
            consoleInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.processConsoleCommand();
                }
            });
        }
        
        if (consoleSubmit) {
            consoleSubmit.addEventListener('click', () => {
                this.processConsoleCommand();
            });
        }

        // Service deployment buttons
        document.querySelectorAll('.service-btn').forEach(button => {
            button.addEventListener('click', () => {
                const service = button.dataset.service;
                this.deployService(service);
            });
        });

        // Start game button
        const startBtn = document.getElementById('start-game-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.startGame();
            });
        }

        // Investigation buttons
        const investigateBtn = document.getElementById('investigate-btn');
        if (investigateBtn) {
            investigateBtn.addEventListener('click', () => {
                this.investigate();
            });
        }

        const serviceScanBtn = document.getElementById('service-scan-btn');
        if (serviceScanBtn) {
            serviceScanBtn.addEventListener('click', () => {
                this.serviceScan();
            });
        }
    }

    processConsoleCommand() {
        const input = document.getElementById('console-input');
        const command = input.value.trim();
        
        if (!command) return;
        
        // Add command to console
        this.addToConsole(`> ${command}`);
        input.value = '';
        
        // Process AWS CLI commands
        if (command.startsWith('aws ')) {
            this.cliProcessor.processCommand(command);
            return;
        }
        
        // Process other commands
        const parts = command.toLowerCase().split(' ');
        const baseCommand = parts[0];
        
        switch (baseCommand) {
            case 'help':
                this.showHelp();
                break;
            case 'status':
                this.showStatus();
                break;
            case 'deploy':
                if (parts[1]) {
                    this.deployService(parts[1]);
                } else {
                    this.addToConsole('> Usage: deploy <service-name>');
                }
                break;
            case 'scan':
                this.serviceScan();
                break;
            case 'investigate':
                this.investigate();
                break;
            default:
                this.addToConsole(`> Unknown command: ${baseCommand}. Type 'help' for available commands.`);
        }
    }

    showHelp() {
        this.addToConsole('> Available commands:');
        this.addToConsole('> help - Show this help message');
        this.addToConsole('> status - Show player status');
        this.addToConsole('> deploy <service> - Deploy AWS service');
        this.addToConsole('> scan - Scan current region');
        this.addToConsole('> investigate - Investigate current region');
        this.addToConsole('> ');
        this.addToConsole('> AWS CLI commands:');
        this.addToConsole('> aws sns create-topic --name <topic-name>');
        this.addToConsole('> aws sqs create-queue --queue-name <queue-name>');
        this.addToConsole('> aws apigateway create-rest-api --name <api-name>');
        this.addToConsole('> aws ec2 describe-instances');
        this.addToConsole('> aws s3 ls');
        this.addToConsole('> aws lambda list-functions');
    }

    showStatus() {
        const player = this.gameState.player;
        this.addToConsole(`> Player Status:`);
        this.addToConsole(`> Level: ${player.level} | XP: ${player.xp}`);
        this.addToConsole(`> Health: ${player.health}/${player.maxHealth}`);
        this.addToConsole(`> Credits: ${player.credits}`);
        this.addToConsole(`> Certifications: ${player.certs}`);
        this.addToConsole(`> Deployed Services: ${player.deployedServices.length}`);
        this.addToConsole(`> Current Region: ${player.currentRegion || 'None'}`);
    }

    deployService(serviceName) {
        const serviceMap = {
            'ec2': 'EC2',
            's3': 'S3', 
            'lambda': 'Lambda',
            'rds': 'RDS',
            'cloudfront': 'CloudFront',
            'dynamodb': 'DynamoDB',
            'sns': 'SNS',
            'sqs': 'SQS',
            'apigateway': 'API Gateway'
        };

        const fullServiceName = serviceMap[serviceName.toLowerCase()] || serviceName;
        
        if (this.gameState.player.deployedServices.includes(fullServiceName)) {
            this.addToConsole(`> ${fullServiceName} is already deployed.`);
            return;
        }

        const cost = this.getServiceCost(serviceName);
        if (this.gameState.player.credits < cost) {
            this.addToConsole(`> Insufficient credits. Need ${cost}, have ${this.gameState.player.credits}.`);
            return;
        }

        // Deduct credits
        this.gameState.player.credits -= cost;
        
        // Start hacking mini-game
        this.addToConsole(`> Initiating deployment of ${fullServiceName}...`);
        this.startHacking(fullServiceName);
    }

    getServiceCost(serviceName) {
        const costs = {
            'ec2': 100, 's3': 50, 'lambda': 150, 'rds': 200,
            'cloudfront': 175, 'dynamodb': 180, 'sns': 60,
            'sqs': 75, 'apigateway': 120
        };
        return costs[serviceName.toLowerCase()] || 100;
    }

    startHacking(serviceName) {
        this.gameState.phase = 'hacking';
        
        // Hide world view, show hacking view
        document.getElementById('global_map-view').classList.add('hidden');
        document.getElementById('fps-view').classList.remove('hidden');
        
        // Start the improved hacking game
        this.hackingGame.start(serviceName);
    }

    onHackingComplete(success, serviceName) {
        // Return to world view
        document.getElementById('fps-view').classList.add('hidden');
        document.getElementById('global_map-view').classList.remove('hidden');
        
        this.gameState.phase = 'world';
        
        if (success) {
            // Add service to deployed services
            this.gameState.player.deployedServices.push(serviceName);
            
            // Award XP
            this.gameState.player.xp += 25;
            
            // Check for level up
            const xpNeeded = this.gameState.player.level * 100;
            if (this.gameState.player.xp >= xpNeeded) {
                this.gameState.player.level++;
                this.gameState.player.xp = 0;
                this.gameState.player.maxHealth += 10;
                this.addToConsole(`> LEVEL UP! You are now level ${this.gameState.player.level}`);
            }
            
            this.addToConsole(`> ${serviceName} deployed successfully! +25 XP`);
            
            // Check win condition
            this.checkWinCondition();
        } else {
            // Refund half the credits
            const refund = Math.floor(this.getServiceCost(serviceName) / 2);
            this.gameState.player.credits += refund;
            this.addToConsole(`> Deployment failed. ${refund} credits refunded.`);
        }
        
        this.updateUI();
    }

    investigate() {
        if (!this.globalMap.currentRegion) {
            this.addToConsole('> No region selected. Click on a region first.');
            return;
        }

        const cost = 25;
        if (this.gameState.player.credits < cost) {
            this.addToConsole(`> Insufficient credits for investigation. Need ${cost}.`);
            return;
        }

        this.gameState.player.credits -= cost;
        this.addToConsole('> Investigating region for clues...');
        this.addToConsole('> Accessing AWS knowledge database...');
        
        // Show AWS question
        const questionShown = this.questionsSystem.showQuestion((isCorrect, isSkipped) => {
            if (isCorrect) {
                this.addToConsole('> ✓ Knowledge verified! Investigation successful.');
                this.gameState.player.xp += 15;
                
                if (this.globalMap.isInTargetRegion()) {
                    this.addToConsole('> *** CRITICAL CLUE DISCOVERED ***');
                    this.addToConsole('> This region contains evidence of Dr. ███████\'s presence!');
                    this.addToConsole('> Deploy all AWS services here to complete the mission.');
                } else {
                    const clues = [
                        'Found encrypted log files with quantum signatures.',
                        'Unusual API call patterns detected in CloudTrail.',
                        'Anomalous network traffic to unknown endpoints.',
                        'Suspicious IAM role modifications in audit logs.',
                        'Quantum algorithm traces in Lambda execution logs.'
                    ];
                    const randomClue = clues[Math.floor(Math.random() * clues.length)];
                    this.addToConsole(`> Clue found: ${randomClue}`);
                }
            } else if (isSkipped) {
                this.addToConsole('> Investigation skipped. No new information gathered.');
            } else {
                this.addToConsole('> ✗ Knowledge verification failed. Investigation incomplete.');
                this.addToConsole('> Some clues may have been missed.');
            }
            this.updateUI();
        });

        if (!questionShown) {
            // Fallback if no questions available
            setTimeout(() => {
                if (this.globalMap.isInTargetRegion()) {
                    this.addToConsole('> *** CRITICAL CLUE DISCOVERED ***');
                    this.addToConsole('> This region contains evidence of Dr. ███████\'s presence!');
                    this.addToConsole('> Deploy all AWS services here to complete the mission.');
                } else {
                    const clues = [
                        'Found encrypted log files with quantum signatures.',
                        'Unusual API call patterns detected in CloudTrail.',
                        'Anomalous network traffic to unknown endpoints.',
                        'Suspicious IAM role modifications in audit logs.',
                        'Quantum algorithm traces in Lambda execution logs.'
                    ];
                    const randomClue = clues[Math.floor(Math.random() * clues.length)];
                    this.addToConsole(`> Clue found: ${randomClue}`);
                }
                this.updateUI();
            }, 2000);
        }
    }

    serviceScan() {
        if (!this.globalMap.currentRegion) {
            this.addToConsole('> No region selected. Click on a region first.');
            return;
        }

        const cost = 15;
        if (this.gameState.player.credits < cost) {
            this.addToConsole(`> Insufficient credits for service scan. Need ${cost}.`);
            return;
        }

        this.gameState.player.credits -= cost;
        this.addToConsole('> Scanning region for available services...');
        
        setTimeout(() => {
            const services = ['EC2', 'S3', 'Lambda', 'RDS', 'SNS', 'SQS', 'API Gateway'];
            const availableServices = services.filter(s => !this.gameState.player.deployedServices.includes(s));
            
            if (availableServices.length > 0) {
                const randomService = availableServices[Math.floor(Math.random() * availableServices.length)];
                this.addToConsole(`> Service detected: ${randomService} available for deployment`);
            } else {
                this.addToConsole('> All services already deployed in this region.');
            }
            this.updateUI();
        }, 1500);
    }

    onRegionChanged(regionId) {
        this.gameState.player.currentRegion = regionId;
        this.addToConsole(`> Infrastructure deployed to ${this.globalMap.regions[regionId].name}`);
        
        // Random chance for events
        if (Math.random() > 0.7) {
            setTimeout(() => {
                this.triggerRandomEvent();
            }, 2000);
        }
    }

    triggerRandomEvent() {
        const events = [
            'Security alert: Unusual access patterns detected.',
            'Performance warning: High latency in current region.',
            'Cost optimization opportunity identified.',
            'New AWS service announcement in this region.',
            'Compliance audit scheduled for this region.'
        ];
        
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        this.addToConsole(`> EVENT: ${randomEvent}`);
    }

    checkWinCondition() {
        const requiredServices = ['EC2', 'S3', 'Lambda', 'SNS', 'SQS', 'API Gateway'];
        const hasAllServices = requiredServices.every(service => 
            this.gameState.player.deployedServices.includes(service)
        );
        
        if (hasAllServices && this.globalMap.isInTargetRegion()) {
            this.winGame();
        }
    }

    winGame() {
        this.gameState.phase = 'complete';
        this.addToConsole('> *** MISSION ACCOMPLISHED ***');
        this.addToConsole('> Dr. ███████ has been located and rescued!');
        this.addToConsole('> All AWS services successfully deployed.');
        this.addToConsole('> Quantum anomaly neutralized.');
        this.addToConsole('> Thank you for playing Quantum Drift!');
        
        // Award final certification
        this.gameState.player.certs++;
        this.updateUI();
    }

    startGame() {
        document.getElementById('start-modal').classList.add('hidden');
        this.gameState.phase = 'world';
        this.addToConsole('> Welcome to Quantum Drift: The Lost AWS Architect');
        this.addToConsole('> Mission: Locate Dr. ███████ using AWS services');
        this.addToConsole('> Type "help" for available commands');
    }

    addToConsole(text) {
        const console = document.getElementById('console');
        const line = document.createElement('div');
        line.textContent = text;
        console.appendChild(line);
        console.scrollTop = console.scrollHeight;
    }

    updateUI() {
        const player = this.gameState.player;
        
        // Update player stats
        document.getElementById('player-level').textContent = player.level;
        document.getElementById('player-health-text').textContent = `${player.health}/${player.maxHealth}`;
        document.getElementById('player-health-bar').style.width = `${(player.health / player.maxHealth) * 100}%`;
        document.getElementById('player-credits').textContent = player.credits;
        document.getElementById('player-certs').textContent = player.certs;
        document.getElementById('available-credits').textContent = player.credits;
        
        // Update XP bar
        const xpNeeded = player.level * 100;
        const xpPercent = (player.xp / xpNeeded) * 100;
        document.getElementById('player-xp-bar').style.width = `${xpPercent}%`;
        
        // Update deployed services display
        const servicesContainer = document.getElementById('deployed-services');
        servicesContainer.innerHTML = '';
        
        if (player.deployedServices.length === 0) {
            servicesContainer.innerHTML = '<div class="text-xs text-gray-500 italic">No services deployed</div>';
        } else {
            player.deployedServices.forEach(service => {
                const serviceElement = document.createElement('div');
                serviceElement.className = 'bg-blue-600 text-white px-2 py-1 rounded text-xs mr-1 mb-1';
                serviceElement.textContent = service;
                servicesContainer.appendChild(serviceElement);
            });
        }
    }
}

// =============================================
// INITIALIZE GAME WHEN DOM IS LOADED
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the enhanced game
    new QuantumDriftGame();
    
    console.log('Quantum Drift: Enhanced Edition loaded successfully!');
});

// Export for potential module use
export { QuantumDriftGame, EnhancedAWSService, AWSCLIProcessor, ImprovedHackingGame, GlobalMap };