# AI Human Dialog Demo

A demonstration application showcasing AI-to-AI dialogue using the DeepBrain AI Web SDK. This project features two AI players that engage in a scripted conversation about their capabilities and collaborative potential.

## Features

- Express.js server with JWT token generation
- DeepBrain AI Web SDK integration
- Interactive dialogue between two AI players
- Real-time conversation flow with background context
- Clean, responsive web interface

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/NickScherbakov/ai-human-dialog-demo.git
   cd ai-human-dialog-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your DeepBrain AI credentials:
   - Open `server.js`
   - Replace `'your-app-id-here'` with your actual DeepBrain AI App ID
   - Replace `'your-user-key-here'` with your actual DeepBrain AI User Key

4. Start the server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to http://localhost:3000
2. Click the "Start Dialogue" button to begin the AI conversation
3. Watch as the two AI players engage in a three-scene dialogue:
   - Scene 1: Initial introductions
   - Scene 2: Discussion of capabilities
   - Scene 3: Collaborative conclusions

## Project Structure

```
ai-human-dialog-demo/
├── package.json          # Project dependencies and scripts
├── server.js             # Express server with JWT endpoint
├── public/
│   ├── index.html        # Main HTML page with AI player containers
│   └── dialog.js         # AI player logic and dialogue management
└── README.md            # This file
```

## Technical Details

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript with DeepBrain AI Web SDK
- **Authentication**: JWT tokens with 5-minute expiration
- **AI Players**: Two synchronized AIPlayer instances
- **Dialogue Flow**: Sequential conversation with idle state management

## Requirements

- Node.js (v14 or higher)
- Valid DeepBrain AI credentials (App ID and User Key)
- Modern web browser with JavaScript enabled

## Troubleshooting

- **Authentication errors**: Ensure your DeepBrain AI credentials are correctly configured in `server.js`
- **Player not loading**: Check browser console for errors and verify SDK loading
- **Dialogue not starting**: Confirm both players are initialized and in idle state

## Development Conversation Transcript

```
This project was developed through a collaborative conversation with ChatGPT. The conversation covered:

1. Initial project requirements and structure planning
2. Express.js server setup with JWT token generation
3. DeepBrain AI Web SDK integration strategies  
4. HTML structure design for dual AI player containers
5. JavaScript dialogue management and state handling
6. CSS styling for responsive layout and user experience
7. Error handling and authentication flow implementation
8. Testing and troubleshooting considerations
9. Documentation and installation instructions
10. Final code review and optimization suggestions

The conversation focused on creating a minimal but complete demonstration of AI-to-AI dialogue capabilities, with emphasis on clean code structure, proper error handling, and user-friendly interface design. The implementation showcases asynchronous JavaScript patterns, REST API integration, and real-time AI interaction management.

Key technical decisions discussed:
- Using Express.js for simplicity and JWT for secure token management
- Implementing waitForIdle() helper function for dialogue synchronization
- Structuring the conversation in distinct scenes for better narrative flow
- Adding comprehensive error handling and user feedback
- Designing responsive CSS for optimal viewing on different devices
```