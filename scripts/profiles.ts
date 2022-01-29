// This file handles all profiles that the website hosts

import { Profile } from '~/types/CV';
import { marc } from './profiles/marc';
import { sebastian } from './profiles/sebastian';

/* TODO later on i want to build an editor for others to fill in their data,
 *  which exports them a correct json
 */

export const profiles: Array<Profile> = [sebastian, marc];
