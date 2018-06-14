import test from 'ava';
import importFresh from 'import-fresh';

test('not tmux', t => {
  delete process.env.TMUX;
  delete process.env.TMUX_PANE;
  t.false(importFresh('.').default);
});

test('tmux', t => {
  process.env.TMUX = true;
  process.env.TMUX_PANE = '%127';
  t.true(importFresh('.').default);
  t.true(importFresh('.').pane() === '%127');
});
