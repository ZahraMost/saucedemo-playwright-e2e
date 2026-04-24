// test-data/users.ts
import { config } from '../config/config';

export const users = {
  standard: {
    username: config.users.standard.username,
    password: config.users.standard.password
  },

  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },

  problem: {
    username: 'problem_user',
    password: 'secret_sauce'
  },

  performance: {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  }
};