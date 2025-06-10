# Quantum Drift: The Lost AWS Architect

Quantum Drift is an interactive browser-based game where you become an AWS agent on a mission to locate the missing AWS Architect, Dr. ███████. Navigate a global AWS network, deploy services, investigate clues, and engage in mini-games—all while managing your resources and overcoming challenges.

---

## How to Play

### 1. Getting Started
- **Launch the Game:** Open the game at [https://mikepfunk28.github.io/A-Cloud-Mysteryv1.0/](https://mikepfunk28.github.io/A-Cloud-Mysteryv1.0/).
- **Accept the Mission:** When the game loads, a start modal displays a mission briefing. Click **"ACCEPT MISSION"** to begin your adventure.

### 2. Game Interface Overview
- **Player Stats:**  
  The left panel displays your agent profile with details such as level, XP, health, credits, and AWS certifications.
  
- **AWS Deployment Status:**  
  Below your stats, you see current infrastructure details including metrics like Security, Performance, Scalability, and Cost Optimization.
  
- **Inventory:**  
  Your deployed AWS services (EC2, S3, Lambda, etc.) appear in the inventory section.
  
- **World Map:**  
  The central panel shows a world map of AWS regions. This is where you select your deployment location.
  
- **Console & Clues:**  
  The right panel is your terminal console for entering commands and reviewing case files that contain vital clues.

### 3. Exploring and Traveling
- **Deploy to a Region:**  
  Click on a region on the world map to deploy your infrastructure:
  - **First Deployment:** The initial click sets your starting location.
  - **Subsequent Travel:** Clicking another region moves your deployment there.  
  *Note:* Traveling consumes health (–5 per move) and may trigger random events.

### 4. Investigating Clues
- **Investigate Button:**  
  Click **"Investigate"** to spend credits (typically 20 credits) and search for clues in your current region.
  
- **Scanning:**  
  Alternatively, type the command `scan` in the console to perform a scan for clues.
  
- **Clue Collection:**  
  Clues help you identify the target region linked to the missing architect.

### 5. Hacking Mini-Game & Service Deployment
- **Deploying Services:**  
  Click on the AWS service buttons (e.g., EC2, S3, Lambda, RDS, CloudFront, DynamoDB) or type a command such as `deploy ec2` to begin deploying a service.
  
- **Hacking Mini-Game:**  
  - **Objective:** Click on moving targets that represent parts of the service data.
  - **Progress:** Each successful click increases a progress bar; reaching 100% means you’ve successfully deployed the service.
  - **Outcome:** Successful hacks add the service to your inventory, boost your infrastructure stats, and may uncover additional clues.

### 6. Using the Command Console
You can interact with the game by entering commands. Some available commands are:

- **`help`**  
  Displays a list of available commands.
  
- **`status`**  
  Shows your current agent status (level, XP, health, credits, and current location).
  
- **`deploy [service]`**  
  Initiates deployment of a specified AWS service (e.g., `deploy ec2`).
  
- **`scan`**  
  Scans your current region for clues.
  
- **`investigate`**  
  Performs a deep investigation, particularly effective if you're in the target region.
  
- **`travel [region]`**  
  Moves your deployment to another AWS region by its identifier (e.g., `travel us-east-1`).

### 7. Game Progression and Winning
- **Time Advancement:**  
  The game clock advances every 30 seconds (each interval representing 1 hour). After 24 hours, a new day starts, and you receive additional credits.
  
- **Leveling Up:**  
  Earn XP by deploying services and taking actions. Once your XP reaches a set threshold, you level up, increasing your maximum health.
  
- **Winning the Game:**  
  To win:
  - **Collect Clues:** Gather enough clues (including a secret clue in the target region).
  - **Deploy All Services:** Successfully deploy all AWS services.
  - **Be in the Target Region:** Ensure you're deployed in the target region when all conditions are met.  
  Upon victory, you’ll receive congratulatory messages, an AWS certification, and the option to play again.

---

## Additional Tips
- **Manage Resources Wisely:**  
  Monitor your credits and health. Poor management can hinder progress.
  
- **Explore Thoroughly:**  
  Experiment with different regions and commands to uncover hidden clues and secrets.
  
- **Retry Strategy:**  
  If your health depletes, the game resets. Use each attempt as a learning opportunity to refine your strategy.

---
