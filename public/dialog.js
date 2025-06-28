// AI Player objects
let p1, p2;

// Helper function to wait for player to be idle
function waitForIdle(player, timeout = 10000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        
        function checkIdle() {
            if (player.getState() === 'idle') {
                resolve();
            } else if (Date.now() - startTime > timeout) {
                reject(new Error('Timeout waiting for player to be idle'));
            } else {
                setTimeout(checkIdle, 100);
            }
        }
        
        checkIdle();
    });
}

// Authentication function
async function authenticate() {
    try {
        console.log('Fetching JWT token...');
        const response = await fetch('/generateJWT');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received token data:', data);
        
        // Generate token for player 1 (we'll use the same credentials for both players)
        const result = await p1.generateToken(data);
        console.log('Token generation result:', result);
        
        if (result.success) {
            console.log('Authentication successful');
            return true;
        } else {
            console.error('Authentication failed:', result);
            return false;
        }
    } catch (error) {
        console.error('Authentication error:', error);
        document.getElementById('status').textContent = 'Authentication failed: ' + error.message;
        return false;
    }
}

// Main dialogue function
async function runDialogue() {
    const startBtn = document.getElementById('startBtn');
    const statusDiv = document.getElementById('status');
    const bgTextDiv = document.getElementById('bgText');
    
    try {
        startBtn.disabled = true;
        statusDiv.textContent = 'Initializing...';
        
        // Authenticate
        statusDiv.textContent = 'Authenticating...';
        const authSuccess = await authenticate();
        
        if (!authSuccess) {
            throw new Error('Authentication failed');
        }
        
        // Wait for both players to be idle
        statusDiv.textContent = 'Waiting for players to be ready...';
        await Promise.all([
            waitForIdle(p1),
            waitForIdle(p2)
        ]);
        
        // Scene 1
        statusDiv.textContent = 'Running dialogue - Scene 1';
        bgTextDiv.textContent = 'Scene 1: Two AI assistants meet for the first time and introduce themselves.';
        
        await p1.send('Hello! I\'m an AI assistant. It\'s nice to meet you. What\'s your name?');
        await waitForIdle(p1);
        
        await p2.send('Hi there! I\'m also an AI assistant. My name is Assistant Two. It\'s great to meet you too!');
        await waitForIdle(p2);
        
        // Scene 2
        statusDiv.textContent = 'Running dialogue - Scene 2';
        bgTextDiv.textContent = 'Scene 2: The AI assistants discuss their capabilities and how they can help humans.';
        
        await p1.send('That\'s wonderful! What kind of tasks do you help humans with?');
        await waitForIdle(p1);
        
        await p2.send('I help with many things like answering questions, writing, and problem-solving. What about you?');
        await waitForIdle(p2);
        
        await p1.send('Similar to you! I love helping with creative tasks and providing information. We make a great team!');
        await waitForIdle(p1);
        
        // Scene 3
        statusDiv.textContent = 'Running dialogue - Scene 3';
        bgTextDiv.textContent = 'Scene 3: The conversation concludes with the AI assistants expressing excitement about future collaborations.';
        
        await p2.send('Absolutely! It\'s exciting to think about all the ways we can help people together.');
        await waitForIdle(p2);
        
        await p1.send('I couldn\'t agree more. Here\'s to many successful collaborations ahead!');
        await waitForIdle(p1);
        
        await p2.send('Cheers to that! Thank you for this wonderful conversation.');
        await waitForIdle(p2);
        
        statusDiv.textContent = 'Dialogue completed successfully!';
        bgTextDiv.textContent = 'Dialogue completed! The two AI assistants have successfully introduced themselves and discussed their collaborative potential.';
        
    } catch (error) {
        console.error('Dialogue error:', error);
        statusDiv.textContent = 'Error: ' + error.message;
        bgTextDiv.textContent = 'An error occurred during the dialogue. Please check the console for details and ensure your DeepBrain AI credentials are properly configured.';
    } finally {
        startBtn.disabled = false;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing AI Players...');
    
    try {
        // Create AI Player objects
        p1 = new AIPlayer({
            element: 'player1',
            size: 1.0,
            left: 0,
            top: 0,
            speed: 1.0
        });
        
        p2 = new AIPlayer({
            element: 'player2', 
            size: 1.0,
            left: 0,
            top: 0,
            speed: 1.0
        });
        
        console.log('AI Players created successfully');
        document.getElementById('status').textContent = 'AI Players initialized. Ready to start dialogue.';
        
    } catch (error) {
        console.error('Error initializing AI Players:', error);
        document.getElementById('status').textContent = 'Error initializing AI Players: ' + error.message;
    }
});