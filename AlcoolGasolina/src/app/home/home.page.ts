import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  precoAlcool: any;
  precoGasolina: any;

  public resultado: String = "";
  public urlImg: String = "logo__feed false";

  calcular() {
    // Validar se os campos foram preenchidos
    if(this.precoAlcool && this.precoGasolina) {
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)

      var res = pAlcool / pGasolina

      if(res >= 0.7) {
        this.resultado = "Melhor utilizar Gasolina";
        this.urlImg = "logo__feed"
      } else {
        this.resultado = "Melhor utilizar Alcool"
        this.urlImg = "logo__feed"
      }
    } else {
      this.urlImg = "logo__feed false"
      this.resultado = "Preencha corretamente os campos!";
    }
  }

}
