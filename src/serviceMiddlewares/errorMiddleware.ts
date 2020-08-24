import { Service } from "../service";
import LocationsResponse from "../types/locationsResponse";
import localizationEN from "../localization/localizationEN";
import { hasError } from "../error/actions";

class ErrorMiddleware implements Service {
    private next: Service;
	private dispatch: React.Dispatch<any>;

	constructor(next: Service, dispatch: React.Dispatch<any>) {
		this.next = next;
		this.dispatch = dispatch;
	}

    public async fetchLocations(): Promise<LocationsResponse> {
        try {
			const response = await this.next.fetchLocations();
			return response;
		} catch (error) {
            this.dispatch(hasError(
                localizationEN.locationsErrorName,
                localizationEN.locationsErrorError));
			throw error;
		}
    }
}

export default ErrorMiddleware
