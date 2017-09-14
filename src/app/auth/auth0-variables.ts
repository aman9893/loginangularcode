interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '13fje6xgKxKUnqrMFjOIFP8Owv4gpaDw',
  domain: 'login1.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
