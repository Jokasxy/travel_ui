import { Service } from '../service';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import LocationsResponse from '../types/locationsResponse';

enum RequestMethods {
	GET = 'GET',
}

class Client implements Service {
    private instance: AxiosInstance;
	private url: string;

	constructor(instance: AxiosInstance) {
		this.instance = instance;
		this.url = process.env.REACT_APP_API_URL! + '/locations';
	}

	public async fetchLocations(): Promise<LocationsResponse> {
		const response = await this.request({
			method: RequestMethods.GET,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			}
		});
		return LocationsResponse.fromJSON(response.data.data.locations);
    }
    
    private request(request: AxiosRequestConfig): Promise<AxiosResponse> {
		return new Promise((resolve, reject) => {
			this.instance
				.request({ ...request, url: this.url })
				.then((response) => {
					resolve(response);
				})
				.catch((error: AxiosError) => {
					reject(error);
				});
		});
	}

}

export default Client;
