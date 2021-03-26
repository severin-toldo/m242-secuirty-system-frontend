import {environment} from '../../environments/environment';

const base = environment.api_base_url;

export const loginUrl = () => `${base}/login`;
export const getAllSecuritySystemsUrl = () => `${base}/api/security-system`;
export const getSecuritySystemHistoryUrl = (securitySystemId: number) => `${base}/api/security-system/${securitySystemId}/history`;
export const finishPairingUrl = () => `${base}/api/security-system/pair/finish`;
export const getSecuritySystemByIdUrl = (securitySystemId: number) => `${base}/api/security-system/${securitySystemId}`;
export const deleteSecuritySystemByIdUrl = (securitySystemId: number) => `${base}/api/security-system/${securitySystemId}`;




