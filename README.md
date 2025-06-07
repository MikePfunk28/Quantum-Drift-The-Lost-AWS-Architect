# Quantum Drift: The Lost AWS Architect - Enhanced Edition

An immersive cyberpunk-themed AWS learning game where you play as a cloud engineer investigating the mysterious disappearance of Dr. ███████ while learning AWS services and best practices.

## 🚀 New Features & Improvements

### ✅ Removed Tailwind CDN Dependency
- **Local CSS**: Replaced CDN with local `css/main.css` file containing all essential Tailwind classes
- **Offline Ready**: Game now works without internet connection
- **Performance**: Faster loading times with local assets

### ✅ Enhanced AWS CLI Support
- **SNS Commands**: Create topics, list topics, publish messages
- **SQS Commands**: Create queues, list queues, send messages  
- **API Gateway Commands**: Create REST APIs, list APIs
- **Extended EC2/S3/Lambda**: Basic commands for all major services

#### AWS CLI Examples:
```bash
aws sns create-topic --name MyTopic
aws sqs create-queue --queue-name MyQueue
aws apigateway create-rest-api --name MyAPI
aws ec2 describe-instances
aws s3 ls
aws lambda list-functions
```

### ✅ Improved Hacking Mini-Game
- **Increased Time**: Extended from 30 to 45 seconds
- **Reduced Difficulty**: Lower required score (10 instead of 15)
- **Better Targeting**: 60% chance for correct service icons
- **More Targets**: 4-6 targets per wave (increased from 3-4)
- **Adaptive Difficulty**: Gradually increases as you progress
- **Better Feedback**: Clear visual and audio feedback

### ✅ Interactive Global Map
- **9 AWS Regions**: Clickable regions across the globe
- **Visual Feedback**: Regions change color when visited
- **Target Highlighting**: Special effects for the mystery location
- **Region Info**: Hover tooltips with region details
- **Progress Tracking**: Visual indication of exploration progress

### ✅ AWS Questions Integration
- **100+ Questions**: Comprehensive AWS certification-style questions
- **Real Scenarios**: Complex multi-service architecture questions
- **Investigation Rewards**: Answer correctly to get better clues
- **Skip Option**: Can skip questions but miss out on bonuses
- **Detailed Explanations**: Learn from both correct and incorrect answers

### ✅ Enhanced Service Deployment
- **New Services**: Added SNS, SQS, and API Gateway deployment
- **Cost System**: Each service has different deployment costs
- **XP Rewards**: Gain experience for successful deployments
- **Service Dependencies**: Some services work better together

## 🎮 How to Play

### Starting the Game
1. **Launch**: Open `index.html` in a web browser or run the included server
2. **Mission Briefing**: Read the story and objectives
3. **Begin**: Click "Begin Mission" to start

### Core Gameplay Loop
1. **Explore Regions**: Click on different AWS regions on the global map
2. **Investigate**: Use the investigate button to search for clues
3. **Answer Questions**: Demonstrate AWS knowledge to unlock information
4. **Deploy Services**: Use credits to deploy AWS services in regions
5. **Complete Hacking**: Successfully complete deployment mini-games
6. **Find Dr. ███████**: Locate the target region and deploy all services

### Commands & Controls
- **Console Commands**: Type `help` for available commands
- **AWS CLI**: Use real AWS CLI syntax for service management
- **Investigation**: Costs 25 credits, may trigger knowledge questions
- **Service Scan**: Costs 15 credits, reveals available services
- **Deployment**: Varies by service, triggers hacking mini-game

## 🛠 Technical Implementation

### Architecture
- **Modular Design**: Separate classes for different game systems
- **Event-Driven**: Clean separation between UI and game logic
- **Extensible**: Easy to add new services, questions, and features

### Security Considerations
- **No External Dependencies**: All assets served locally
- **Input Validation**: Proper sanitization of user inputs
- **Safe Execution**: No eval() or dangerous code execution
- **CORS Headers**: Proper cross-origin resource sharing

### File Structure
```
Quantum-Drift-The-Lost-AWS-Architect/
├── index.html              # Main game interface
├── game.js                 # Core game logic and classes
├── questions.json          # AWS certification questions
├── css/main.css           # Local Tailwind CSS classes
├── assets/images/         # Game assets and images
├── server.py              # Development server
└── README.md              # This file
```

## 🚀 Running the Game

### Option 1: Simple File Server
```bash
# Navigate to game directory
cd Quantum-Drift-The-Lost-AWS-Architect

# Start Python server
python3 server.py

# Open browser to http://localhost:12000
```

### Option 2: Direct File Access
Simply open `index.html` in any modern web browser.

### Option 3: Production Deployment
Deploy to any static hosting service (GitHub Pages, Netlify, etc.)

## 🎯 Learning Objectives

### AWS Services Covered
- **Compute**: EC2, Lambda, Fargate
- **Storage**: S3, EBS, EFS
- **Database**: RDS, DynamoDB
- **Networking**: VPC, CloudFront, Route 53
- **Integration**: SNS, SQS, API Gateway
- **Security**: IAM, KMS, CloudTrail
- **Monitoring**: CloudWatch
- **Machine Learning**: SageMaker, Bedrock

### Skills Developed
- **AWS CLI Proficiency**: Real command syntax and usage
- **Architecture Design**: Multi-service solution patterns
- **Security Best Practices**: Encryption, access control, compliance
- **Cost Optimization**: Resource selection and management
- **Troubleshooting**: Performance monitoring and debugging

## 🔧 Customization

### Adding New Questions
Edit `questions.json` to add more AWS questions:
```json
{
  "question": "Your question here",
  "options": {
    "A": "Option A",
    "B": "Option B", 
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "B",
  "explanation": "Detailed explanation here"
}
```

### Adding New Services
Extend the `EnhancedAWSService` class in `game.js`:
```javascript
// Add new service methods
createNewService(options) {
  // Implementation here
}
```

### Modifying Difficulty
Adjust game parameters in `game.js`:
- `hackingGame.timeLeft`: Hacking time limit
- `hackingGame.requiredScore`: Required score to pass
- Service costs in `getServiceCost()`
- Investigation costs and rewards

## 🐛 Troubleshooting

### Common Issues
1. **Questions not loading**: Ensure `questions.json` is accessible
2. **CSS not applying**: Check `css/main.css` path
3. **Server not starting**: Verify port 12000 is available
4. **Game not responding**: Check browser console for errors

### Browser Compatibility
- **Chrome**: Fully supported
- **Firefox**: Fully supported  
- **Safari**: Fully supported
- **Edge**: Fully supported
- **Mobile**: Basic support (desktop recommended)

## 📈 Future Enhancements

### Planned Features
- **Multiplayer Mode**: Collaborative cloud architecture challenges
- **Advanced Scenarios**: Complex disaster recovery simulations
- **Certification Prep**: Structured learning paths for AWS certs
- **Performance Metrics**: Detailed analytics and progress tracking
- **Custom Scenarios**: User-generated content and challenges

### Contributing
1. Fork the repository
2. Create a feature branch
3. Add your improvements
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🎮 Have Fun Learning!

Quantum Drift combines entertainment with education to make learning AWS services engaging and memorable. Whether you're preparing for certification or just want to understand cloud architecture better, this game provides a unique hands-on experience.

**Good luck finding Dr. ███████ and mastering AWS!** 🚀☁️

---

## 🌐 Access the Game

The enhanced game is now running and accessible at:
- **Local**: http://localhost:12000
- **External**: https://work-1-eyldxomwxpzwinod.prod-runtime.all-hands.dev

All improvements have been implemented and the game is ready to play!