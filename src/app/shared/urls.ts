import {environment} from '../../environments/environment';

const base = environment.api_base_url;

export const loginUrl = () => `${base}/login`;
