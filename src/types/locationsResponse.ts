import { LatLng, latLng } from "leaflet";

interface ResponseData {
	id: number;
	name: string;
	country: string;
	description: string;
	latitude: number;
	longitude: number;
	imageurls: Array<{id: number; imageURL: string; location_id: number}>;
}

export interface Location {
	id: number;
	name: string;
	country: string;
	description: string;
	position: LatLng;
	imageurls: Array<string>;
}

class LocationsResponse {
	private locations: Array<Location>

    private constructor(locations: Array<Location>) {
		this.locations = locations;
	}

	public static fromJSON(responseData: Array<ResponseData>) {
		let locations: Array<Location> = [];
		responseData.forEach(location => {
			let urls: Array<string> = [];

			location.imageurls.forEach(url => {
				urls.push(url.imageURL);
			});
			
			locations.push({
				id: location.id,
				name: location.name,
				country: location.country,
				description: location.description,
				position: latLng(location.latitude, location.longitude),
				imageurls: urls,
			});
		});
		return new LocationsResponse(locations);
	}

	public getLocations(): Array<Location> {
		return this.locations;
	}

	public getLocationByIndex(index: number): Location {
		return this.locations[index];
	}
}

export default LocationsResponse;
