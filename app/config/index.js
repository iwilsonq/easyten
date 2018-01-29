console.log(process.env);
class Config {
	get(key) {
		return env[key];
	}
}

const config = new Config();
export default config;
