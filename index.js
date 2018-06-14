module.exports = {
  default: 'TMUX' in process.env,
  pane: () => process.env.TMUX_PANE
};
