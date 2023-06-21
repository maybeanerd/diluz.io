// This file handles all profiles that the website hosts

import { Profile } from '~/types/CV';
import { marc } from './profiles/marc';
import { sebastian } from './profiles/sebastian';
import { julian } from './profiles/julian';

/* TODO later on i want to build an editor for others to fill in their data,
 *  which exports them a correct json
 */

export const profiles: Array<Profile> = [sebastian, marc, julian];
