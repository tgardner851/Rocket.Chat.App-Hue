export default {
  login: {
    command: 'hue-login',
    usage: '`/hue-login`',
    description: 'Login to Hue',
  },
  lights: {
    command: 'hue-lights',
    usage: '`/hue-lights (ID,ID)`',
    description: 'View your Lights',
  },
  lightState: {
    command: 'hue-light-state',
    usage: '`/hue-light-state [ID,ID] (on=true) (bri=254) (color=#ff0000) (hue=65535) (sat=254) (ct=500) (cie=0.5:0.4) (alert=false)`',
    description: 'Change Light state',
  },
  groups: {
    command: 'hue-groups',
    usage: '`/hue-groups`',
    description: 'View your Light Groups',
  },
  groupState: {
    command: 'hue-group-state',
    usage: '`/hue-group-state [ID,ID] (on=true) (bri=254) (color=#ff0000) (hue=65535) (sat=254) (ct=500) (cie=0.5:0.4) (alert=false)`',
    description: 'Change Group state',
  },
  group: {
    command: 'hue-group',
    usage: '`/hue-group [ID OR NAME]`',
    description: 'Search for Group (name can be partial)',
  },
  scenes: {
    command: 'hue-scenes',
    usage: '`/hue-scenes (all)`',
    description: 'View your Scenes (use all to return "unlocked" scenes)',
  },
  scene: {
    command: 'hue-scene',
    usage: '`/hue-scene [SCENE ID] (GROUP ID)`',
    description: 'Set a scene',
  },
};
