const MORGAN_CONFIG = process.env.MODE === 'development' ? 'dev' : 'tiny';

export default MORGAN_CONFIG;
