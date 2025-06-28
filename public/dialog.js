const p1 = new AIPlayer(document.getElementById('player1'));
const p2 = new AIPlayer(document.getElementById('player2'));
const AIPlayerState = { NONE: 0, INITIALIZE: 1, IDLE: 2, PLAY: 3, PAUSE: 4, RELEASE: 5 };

function waitForIdle(player) {
  return new Promise(resolve => {
    (function check() {
      if (player.getState() === AIPlayerState.IDLE) resolve();
      else setTimeout(check, 100);
    })();
  });
}

async function authenticate() {
  const res = await fetch('/generateJWT');
  const { appId, token: clientToken } = await res.json();
  const result = await p1.generateToken({ appId, token: clientToken });
  if (!result.succeed) throw new Error('Authentication failed');
  await waitForIdle(p1);
  await waitForIdle(p2);
}

async function runDialogue() {
  await authenticate();

  document.getElementById('bgText').innerText = 'Scene 1: Greeting';
  await p1.send('Привет! Как дела?');
  await waitForIdle(p1);

  document.getElementById('bgText').innerText = 'Scene 2: Response';
  await p2.send('Всё отлично, спасибо!');
  await waitForIdle(p2);

  document.getElementById('bgText').innerText = 'Scene 3: Farewell';
  await p1.send('До встречи!');
  await waitForIdle(p1);
}

document.addEventListener('DOMContentLoaded', runDialogue);