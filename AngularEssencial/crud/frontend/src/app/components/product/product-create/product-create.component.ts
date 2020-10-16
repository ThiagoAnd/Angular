import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

product: Product ={
  name:'Produto teste',
  price: 158
}
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct (): void{
    //no metodo subscribe vou ser avisado quando a resposta chegar
    this.productService.create(this.product).subscribe(()=>{

    this.productService.showMessage('Produto criado')
    })
  }

  cancel (): void{
    this.router.navigate(['/products'])
  }
  

}
