// config.ts

export const config = {
  baseURL: process.env.BASE_URL!,
  users: {
    standard: {
      username: process.env.STANDARD_USER!,
      password: process.env.PASSWORD!
    }
  }
};
