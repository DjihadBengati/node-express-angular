import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IProduct, Product } from './product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private statusUrl = '/api/products';

    constructor(private http: Http) { }

    // Get products
    get(): Promise<Array<IProduct>> {
        return this.http.get(this.statusUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Create product
    create(product: Product): Promise<IProduct> {
        return this.http.post(this.statusUrl, product)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Delete a product
    delete(id: string): Promise<any> {
        return this.http.delete(`${this.statusUrl}/${id}`)
            .toPromise()
            .then(response => response.json())
            .catch(this.error);
    }

    // Error handling
    private error(error: any) {
        let message = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(message);
    }
}
