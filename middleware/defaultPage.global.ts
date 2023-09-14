import { defaultProfileName } from '~/server/profiles';

export default defineNuxtRouteMiddleware((to /* , from */) => {
  // Default to the default profile if no profile is specified
  if (to.path === '/') {
    return navigateTo(`/${defaultProfileName}`);
  }
});
