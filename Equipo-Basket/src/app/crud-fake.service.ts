import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudFakeService {
  items: any[] = [{
                    id: 1,
                    nombre: 'Juan Carlos Navarro',
                    num: 7,
                    posicion: "Escolta",
                    edad: 43
                  },
                  {
                    id: 2,
                    nombre: 'Pau Gasol',
                    num: 16,
                    posicion: "Ala-pivot",
                    edad: 43
                  },
                  {
                    id: 3,
                    nombre: 'Marc Gasol',
                    num: 	33,
                    posicion: "Pivot",
                    edad: 39
                  },
                  {
                    id: 4,
                    nombre: 'Rudy Fernández',
                    num: 	33,
                    posicion: "Alero",
                    edad: 39
                  },
                  {
                    id: 5,
                    nombre: 'Ricky Rubio',
                    num: 	9,
                    posicion: "Base",
                    edad: 33
                  }];
  newItem: any = {};

  addItem() {
    this.items.push(this.newItem);
    this.newItem = {};
  }

  getItemById(id:number){
    return this.items.find(item => item.id === id);
  }

  updateItem(index: number, updatedItem: any) {
    this.items[index] = updatedItem;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
